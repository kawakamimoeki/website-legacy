import React from 'react'
import Heading from '../../heading'
import Repos from '../../repos'
import { Repository } from '../../../interfaces/repository'

type Props = {
  repos: Array<Repository>
}

export default function Contributions({ repos }: Props) {
  return (
    <div className="mb-5">
      <Heading>Contributions</Heading>
      <Repos repos={repos}></Repos>
    </div>
  )
}
