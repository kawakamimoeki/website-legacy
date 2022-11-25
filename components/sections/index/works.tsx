import React from 'react'
import Heading from '../../heading'
import Repos from '../../repos'

type Props = {
  repos: Array<Object>
}

export default function Works({ repos }: Props) {
  return (
    <div className="mb-5">
      <Heading>Works</Heading>
      <Repos repos={repos}></Repos>
    </div>
  )
}
