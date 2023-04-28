---
title: Next.jsとVercel の静的サイトにPrismaでデータベースをそっと"添える"
date: '2022-11-08'
---

最近、自分のウェブサイトに「いいね」ボタンを追加しました。

過去に、静的なウェブサイトに少しのデータベース処理を追加したい場合、アプリの実装を静的サイトジェネレータから Ruby on Rails のようなサーバーサイドフレームワークに変更するか、別の DB サーバーを持ち、API にアクセスする必要がありました。サイトの機能がアーキテクチャ全体に影響を与えました。

しかし、この実験により、Next.js と Vercel は、大幅なアーキテクチャの変更なしにウェブサイトの機能を拡張できる非常に **アプリケーション重視** の哲学を持っていることがわかりました。これは、Vercel が Serverless Function で Rest API を受け取れるためです。

以下を見てみましょう。

まず、UI を実装します。

```jsx:components/like
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

データベースの場合、 `TODO: create like`

```jsx:components/like
const createLike = async () => {
  if (liked === false) {
    // TODO: create like
    setLikeCount(likeCount + 1)
    setLiked(true)
  }
}
```

そして、 `likeCount`。

```jsx:components/like
const [likeCount, setLikeCount] = useState(props.likeCount)
```

次に、Node.js で作成された ORM である Prisma と PostgreSQL を準備します。

```bash
npm i prisma
```

これは `prisma/schema.prisma`、スキーマファイルです。Like モデルは非常にシンプルです。

```prisma:prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Like {
  id    Int     @id @
```
