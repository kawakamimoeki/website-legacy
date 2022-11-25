import React from 'react'
import { GoMarkGithub } from 'react-icons/go'

export default function Gh({ repo }) {
  return (
    <a href={repo.url}>
      <GoMarkGithub className="inline mr-2" />
      {repo.nameWithOwner}: {repo.description}
    </a>
  )
}
