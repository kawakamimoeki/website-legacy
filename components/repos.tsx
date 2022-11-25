import React from 'react'
import Gh from './sections/index/gh'

type Props = {
  repos: Array<Object>
}

export default function Repos({ repos }: Props) {
  return (
    <ul>
      {repos.map((r, i) => {
        return (
          <li key={i} className="py-1">
            <Gh repo={r} />
          </li>
        )
      })}
    </ul>
  )
}
