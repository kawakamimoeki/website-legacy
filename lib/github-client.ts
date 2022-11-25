import { GraphQLClient } from 'graphql-request'

const githubClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.GITHUB_BEARER_TOKEN}`
  }
})

export { githubClient }
