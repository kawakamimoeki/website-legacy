import { gql } from 'graphql-request'
import { githubClient } from './github-client'

interface Repository {
  repo: string
  owner: number
}

const repositoryInfos = async (repositories: Array<Repository>) => {
  return await Promise.all(
    repositories.map(async (r: Repository): Promise<Object> => {
      const data = await githubClient.request(gql`
  {
    repository(name: "${r.repo}", owner: "${r.owner}") {
      nameWithOwner
      description
      url
    }
  }`)
      return data.repository
    })
  )
}

export { repositoryInfos }
