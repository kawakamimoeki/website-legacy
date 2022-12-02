---
title: "Using Docker's Multi-stage build to reduce build time"
date: '2022-11-01'
---

The reason behind multi-stage builds is to reduce image size.

> It was actually very common to have one Dockerfile to use for development (which contained everything needed to build your application), and a slimmed-down one to use for production, which only contained your application and exactly what was needed to run it. This has been referred to as the “builder pattern”. Maintaining two Dockerfiles is not ideal.

[Multi-stage builds | Docker Documentation](https://docs.docker.com/build/building/multi-stage/)

However, in my case, the **build time** is more serious than the image size.
This is because the language I use most often is **scripting language**.

However, it seems that this multi-stage build, if used properly, can reduce the build time considerably.

Let's give it a try. Using a simple Ruby on Rails and Node.js asset environment as an example, we'll start with a single-stage build and try to improve from there.

```dockerfile
FROM ruby:3.1
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
RUN npm install --global yarn@1.22.19
RUN gem install bundler
RUN mkdir -p /rails
WORKDIR /rails
COPY . .
RUN bundle install
RUN yarn install
RUN RAILS_ENV=production bundle exec rails assets:precompile
CMD ["bin/rails", "s"].
```

Finally, the rails

```dockerfile
RUN bundle install
RUN yarn install
RUN RAILS_ENV=production bundle exec rails assets:precompile
```

Done, but this is where it will most likely take the most time.
Even more annoying is that if any of the sources are modified, the

```dockerfile
COPY . .
```

The layer cache will be perged, so be sure to use

```dockerfile
RUN bundle install
RUN yarn install
RUN RAILS_ENV=production bundle exec rails assets:precompile
```

will be executed.
This is always the case due to the layer caching mechanism.

> Once the cache is invalidated, all subsequent Dockerfile commands generate new images and the cache is not used.

[Dockerfile Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

To solve this problem, the next step is to prepare a `builder` stage.

```dockerfile
FROM ruby:3.1 as builder
WORKDIR /tmp
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
RUN npm install --global yarn@1.22.19
RUN gem install bundler
COPY Gemfile Gemfile.lock . / /
RUN bundle install
COPY package.json yarn.lock . /
RUN yarn install
COPY app/assets app/assets
COPY app/javascript app/javascript
COPY bin bin
COPY config config
COPY Rakefile vite.config.ts . /
RUN RAILS_ENV=production bundle exec rails assets:precompile

FROM ruby:3.1 as app
RUN mkdir -p /rails
WORKDIR /rails
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /tmp/public/vite public/vite
COPY . .
CMD ["bin/rails", "s"].
```

Notable here.

```dockerfile
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /tmp/public/vite public/vite
COPY . .
```

`--from` allows you to copy files from other stages, but the **problem** is the `COPY` order\*\*.
First, you need to copy the potentially time-consuming

```dockerfile
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /tmp/public/vite public/vite
```

is written first, followed by:

```dockerfile
COPY . .
```

Now `bundle install` will not be executed unless one of the `Gemfile` `Gemfile.lock` is modified.

However, the problem remains.
If you change any of the `Gemfile` `Gemfile.lock`, it will even run `yarn install`.

So let's go to the final form for now.

```dockerfile
FROM ruby:3.1 as builder
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
RUN npm install --global yarn@1.22.19

FROM ruby:3.1 as bundler
WORKDIR /tmp
RUN gem install bundler
COPY Gemfile Gemfile.lock . /tmp
RUN bundle install

FROM node as yarn
WORKDIR /tmp
COPY package.json yarn.lock . / / RUN yarn install
RUN yarn install

FROM builder as assets
WORKDIR /tmp
COPY --from=bundler /usr/local/bundle /usr/local/bundle
COPY --from=yarn /tmp/node_modules node_modules
COPY app/assets app/assets
COPY app/javascript app/javascript
COPY bin bin
COPY config config
COPY Rakefile Gemfile Gemfile.lock package.json yarn.lock vite.config.ts . /
RUN RAILS_ENV=production bundle exec rails assets:precompile

FROM ruby:3.1 as app
RUN mkdir -p /rails
WORKDIR /rails
COPY --from=bundler /usr/local/bundle /usr/local/bundle
COPY --from=assets /tmp/public/vite public/vite
COPY . .
CMD ["bin/rails", "s"].
```

👍

In this `Dockerfile`.

- **Controls caching by only capturing changes to files on which the executing process depends**.

which is achieved by the `Dockerfile`. Now, for example, if `Gemfile.lock` is changed, `yarn install` will not be executed.

**Furthermore**.

**You may have noticed that the `yarn` stage and the `bundler` stage are processed in parallel**.

The structure of the execution is

- `COPY --from=bundler /usr/local/bundle /usr/local/bundle`.
  - `RUN bundle install`.
- `COPY --from=bundler /usr/local/bundle /usr/local/bundle`
  - `--from=yarn /tmp/node_modules node_modules`
    - `RUN yarn install`.

and we can now run the necessary processes in parallel while resolving the `--from`!

---

- **Multi-stage builds can take full advantage of layer caching**.
- **Multi-stage builds can achieve parallel processing**.

Thank you for reading.
