---
title: 'Testing with Prisma'
date: '2022-11-05'
---

I have recently been experimenting with full stack app development using next.js and prisma. By the way, take a look at the prisma documentation.

[Integration testing with Prisma](https://www.prisma.io/docs/guides/testing/integration-testing)

> One way to simulate a real world environment is to use Docker to encapsulate a database and some test data. This can be spun up and torn down with the tests and so operate as an isolated environment away from your production databases.

> This guide assumes you have Docker and Docker Compose installed on your machine as well as Jest setup in your project.

I see what you're saying, but... Do you want to prepare that much for testing? I want to run tests more easily and nimbly.

And this is important, because the documentation does not tell us how to clean up the database easily for each test case, which makes the tests independent and changes their behavior depending on the order of the tests.

So let's do it.

In this case, we have prepared the following schema.

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DB_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String
}
```

```
npx prisma generate
```

First, we can use Dotenv to specify the URL of the database for testing.

```
npm i -D dotenv
```

```
# .env.test
DB_URL=postgresql://user:password@127.0.0.1:5432/example-test
```

Next, we will define the test process. Here, let's use the "pre" and "post" functions of script.

```json
{
  "scripts": {
    "pretest": "pg_ctl -D db/pgdata start && dotenv -e .env.test -- prisma migrate dev",
    "test": "dotenv -e .env.test -- mocha",
    "posttest": "pg_ctl -D db/pgdata stop"
  }
}
```

The point here is to use Dotenv's API to use `.env.test`.

The last thing we need to do is clean up the database, which is the first thing we applied for. In the case of mocha, this is done with beforeEach, afterEach.

```javascript
import { PrismaClient } from '@prisma/client'

export class PrismaCleaner {
  constructor(prisma = new PrismaClient()) {
    this.prisma = prisma
    const propertyNames = Object.getOwnPropertyNames(prisma)
    this.modelNames = propertyNames.filter((name) => this.isModelName(name))
  }

  async clean() {
    console.log(`Database cleaning...`)
    return Promise.all(
      this.modelNames.map((modelName) => this.prisma[modelName].deleteMany())
    )
  }

  /**
   * @param {String} name
   * @returns {Boolean}
   */
  isModelName(name) {
    return !name.match(/^(_|\$)/)
  }
}
```

```javascript
import * as assert from 'assert'
import { PrismaCleaner } from '../index.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const cleaner = new PrismaCleaner()

describe('prisma-cleaner', () => {
  beforeEach(async () => {
    await cleaner.clean() # This
  })

  afterEach(async () => {
    await cleaner.clean() # This
  })

  describe('first creation', () => {
    it('creates a user', async () => {
      const user = await prisma.user.create({
        data: {
          name: 'John Lenon',
          email: 'john@example.com'
        }
      })
      assert.equal(user.name, 'John Lenon')
    })
  })

  describe('second creation', () => {
    it('creates a user', async () => {
      const user = await prisma.user.create({
        data: {
          name: 'John Wick',
          email: 'john@example.com'
        }
      })
      assert.equal(user.name, 'John Wick')
    })
  })
})
```

This is all you need to do.

By the way, I found several libraries for this database cleanup, but none of them worked perfectly.

- [emerleite/node-database-cleaner: The simplest way to clean your database after tests](https://github.com/emerleite/node-database-cleaner)
- [blazing-edge-labs/node-postgres-cleaner: Extremely simple way to clean your postgres database](https://github.com/blazing-edge-labs/node-postgres-cleaner)

For now, I'll just publish my library this time.

- [cc-kawakami/prisma-cleaner: Prisma Cleaner is a utility for cleaning database with Prisma in testing. You can use in Jest or Mocha, etc.](https://github.com/cc-kawakami/prisma-cleaner)

The Prisma development experience is not as bad as I thought it would be, but I feel that the testing environment is not yet ready, so I wanted to commit to it!

Thank you for reading.
