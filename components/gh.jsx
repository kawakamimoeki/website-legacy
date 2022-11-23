import { GoMarkGithub } from 'react-icons/go'

export default function Component({ repo }) {
  return (
    <a href={repo.url}>
      <GoMarkGithub className="inline mr-2" />
      {repo.nameWithOwner}: {repo.description}
    </a>
  )
}
