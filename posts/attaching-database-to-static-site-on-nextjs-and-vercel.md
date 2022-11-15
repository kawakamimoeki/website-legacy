---
title: 'Attaching database to static site on Next.js and Vercel'
date: '2022-11-08'
---

I recently added a like button to my website.

In the past, if I wanted to add a little database processing to a static website, I either had to change the app implementation from a static site generator to a server-side framework like Ruby on Rails, or I had to have another DB server and hit API. Site functionality affected the entire architecture.

However, this experiment made us realize that Next.js and Vercel have a very **application-first** philosophy that can extend the functionality of a website without major architectural changes.
This is largely due to the fact that Vercel is able to receive the Rest API with Serverless Function.

Let's see.

First, we will implement the UI.

```jsx:components/like.jsx
import { useState } from 'react'
import { MdThumbUp } from 'react-icons/md'

export default function Component(props) {
  const [likeCount, setLikeCount] = useState(props.likeCount)
  const [liked, setLiked] = useState(false)
  const createLike = async () => {
    if (liked === false) {
      // TODO: create like
      setLikeCount(likeCount + 1)
      setLiked(true)
    }
  }
  return (
    <>
      <span className={liked ? 'text-blue-500' : undefined}>
        <span
          onClick={createLike}
          className="ml-4 mb-4 align-bottom cursor-pointer inline-block bg-white border-2 border-gray-800 rounded-full px-4">
          <MdThumbUp className="inline mr-2" />
          {likeCount}
        </span>
      </span>
      <span className="inline-block ml-4 mb-4 align-bottom">
        {liked && <span>Thank you!</span>}
      </span>
    </>
  )
}
```

Where the DB is concerned, `TODO: create like`

```jsx:components/like.jsx
const createLike = async () => {
  if (liked === false) {
    // TODO: create like
    setLikeCount(likeCount + 1)
    setLiked(true)
  }
}
```

and `likeCount`.

```jsx:components/like.jsx
const [likeCount, setLikeCount] = useState(props.likeCount)
```

Now, we will prepare PostgreSQL and Prisma, an ORM made with Node.js.

```bash
npm i prisma
```

This is `prisma/schema.prisma`, schema file.
Like model is very simple.

```prisma:prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Like {
  id    Int     @id @default(autoincrement())
}
```

And we will generate and aplly migrations.

```
npm run prisma migrate dev
```

Next, we will generate prisma client to access database.

```
npm run prisma generate
```

Then, we will implement the part that actually accesses the database.

If you export a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps`. So, we get like count on here and set props.

```javascript:pages/index.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Home(props) {
  //...
}

export async function getServerSideProps(context) {
  const likeCount = await prisma.like.count()
  return {
    props: { likeCount: likeCount }
  }
}
```

Then the update part of like. We will create post endpoint to create a like record

```javascript:api/like/create.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const like = await prisma.like.create()
  res.status(201).json(like)
}
```

and add the fetching process to callback.

```jsx:components/like.jsx
const createLike = async () => {
  if (liked === false) {
    fetch('/api/like/create')
    setLikeCount(likeCount + 1)
    setLiked(true)
  }
}
```

This concludes the implementation part.

Next, let's set up Vercel to use Prisma and prepare a PostgreSQL server.

I have a PostgreSQL server at render.com.

[Cloud Application Hosting for Developers | Render](https://render.com/)

Prisma has put together a method for deploying to
Vercel, so I will try to follow this.

[How to deploy a Prisma app to Vercel](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)

```js:package.json
{
  "scripts": {
    "vercel-build": "prisma generate && prisma migrate deploy && next build"
  }
}
```

Then, we will environment variable for Prisma to Vercel.

That's it!

We were able to add DB-based functionality to our site without major architectural changes. It was a very freeing development experience, and I think I understand a little bit of what Next.js and Vercel are trying to do.

Thank you for reading.
