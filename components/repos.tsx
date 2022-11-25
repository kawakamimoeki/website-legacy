import React from 'react'
import Gh from './sections/index/gh'
import { Repository } from '../interfaces/repository'

type Props = {
  repos: Array<Repository>
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
