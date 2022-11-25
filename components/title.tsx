import React from 'react'

type Props = {
  children: JSX.Element | string
}

export default function Title({ children }: Props) {
  return <h1 className="text-4xl mb-1 font-bold">{children}</h1>
}
