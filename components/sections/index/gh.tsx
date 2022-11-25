import Link from 'next/link'
import React from 'react'
import { GoMarkGithub } from 'react-icons/go'

export default function Gh({ repo }) {
  return (
    <Link href={repo.url} target="_blank" rel="noopener noreferer">
      <GoMarkGithub className="inline mr-2" />
      {repo.nameWithOwner}: {repo.description}
    </Link>
  )
}
