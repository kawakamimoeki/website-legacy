---
title: Understanding Clean Architecture with Small Ruby Libraries
date: '2022-11-01'
---

After about 5 laps around Clean architecture since I came across [hanami/hanami: The web, with simplicity.](https://github.com/hanami/hanami), I'm finally getting it down in my gut, so I'll summarize.

#### It is difficult to understand while using a frameworks like Ruby on Rails

When using a framework, the outer moat of the Usecase in the [diagram](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) is filled in: Controller, View, and Model in the case of MVC, and Repository in the case of other patterns. Personally, I feel that if all three layers from the inner layer are integrated, they are the center of the application.

![Image description](/img/clean-architecture.jpg)

So I tried to implement each responsibility of the application using different libraries.

Here it is. [cc-kawakami/clean-architecture-minimal-app: A minimal Clean Architecture app](https://github.com/cc-kawakami/clean-architecture-minimal-app)

These are the libraries we used.

- Use Case: [utils/interactor.rb at v1.3.8 - hanami/utils](https://github.com/hanami/utils/blob/v1.3.8/lib/hanami/interactor.rb)
- Controller: [sinatra/sinatra: Classy web-development dressed in a DSL (official / canonical repo)](https://github.com/sinatra/sinatra)
- Serializer: [procore/blueprinter: Simple, Fast, and Declarative Serialization Library for Ruby](https://github.com/procore/blueprinter)
- Object Mapper: [rom-rb/rom: Data mapping and persistence toolkit for Ruby](https://github.com/rom-rb/rom)
- DB: [sparklemotion/sqlite3-ruby: Ruby bindings for the SQLite3 embedded database](https://github.com/sparklemotion/sqlite3-ruby)

#### "Let there be Entity."

We will attack from the heart of the architecture. First, Entity.

```ruby
class User
  attr_reader :id, :name, :email

  def initialize(id:, name:, email:)
    @id = id
    @name = name
    @email = email
  end
end
```

This is a plain ruby object. It defines what kind of information you want to handle in your business. In this case, we have a User Entity to manage users.

#### Next, the business logic of the app

This app will allow you to search users by ID.

```ruby
class FindUser
  include Hanami::Interactor

  expose :user

  def initialize(repository:, serializer:)
    @repository = repository
    @serializer = serializer
  end

  def call(id)
    begin
      # Find users
    rescue => e
      error!(e.class.name)
    end
  end
end
```

We now have a Use Case that looks like this. We can now define what purpose the app serves in the business: Repository, Serializer is an Adapter that fetches Entity and outputs it. This is used by Use Case.

#### Then, we can create the Interface Adapters.

Repository.

```ruby
class UserRepository < ROM::Repository[:users].
  commands :create

  def find(id)
    users.by_pk(id).map_to(User).one
  end
end
```

Controller.

```ruby
get "/users/:id" do
  find = FindUser.new.call(params["id"])

  if find.success?
    if find.user
      status 200
      body = find.user
    else
      status 404
      body = { error: "Not found!" }
    end
  else
    status 500
    body = { error: find.error }
  end

  json body
end
```

Serializer.

```ruby
class UserSerializer < Blueprinter::Base
  identifier :id

  fields :name, :email
end
```

We're all set.

Now we can write the details of the Use case that came up earlier.

```ruby
class FindUser
  include Hanami::Interactor

  expose :user

  def initialize(
    repository: UserRepository.new(App.new.rom),
    serializer: UserSerializer
  )
    @repository = repository
    @serializer = serializer
  end

  def call(id)
    begin
      user = @repository.find(id)
      @user = @serializer.render_as_hash(user)
    rescue => e
      error!(e.class.name)
    end
  end
end
```

#### Execute

```bash
$ curl http://127.0.0.1:9292/users/1
{"id":1, "email": "smith@exmaple.com", "name": "Smith"}
```

OK, so you get the sense that the HTTP request/response is just one of the **input/output details** of business logic.
Likewise, the DB is only one of the **implementations** of creating the User. DB and HTTP are **details**.

#### Difficult to mix responsibilities, No mixing of responsibilities

This design naturally leads to a design in which the details of DB, HTTP, HTML, and JSON are distributed in each direction of the circle, starting from the Use case. The above is all.

That's all. Thank you very much.
