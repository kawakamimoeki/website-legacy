import { gql } from 'graphql-request'
import { githubClient } from './github-client'

type RepositoryInfo = {
  repo: string
  owner: string
}

export async function githubRepositories(
  repositoryInfos: Array<RepositoryInfo>
) {
  return await Promise.all(
    repositoryInfos.map(async (r: RepositoryInfo): Promise<Object> => {
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
