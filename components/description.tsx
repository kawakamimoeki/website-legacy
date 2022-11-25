import React from 'react'

type Props = {
  title: JSX.Element
  detail: JSX.Element
}

export default function Bio({ title, detail }: Props): JSX.Element {
  return (
    <div className="flex">
      <dt className="font-bold mr-4 min-w-fit">{title}</dt>
      <dd>{detail}</dd>
    </div>
  )
}
