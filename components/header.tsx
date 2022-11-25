import React from 'react'
import meta from '../datas/meta.json'
import Image from 'next/image'
import Title from './title'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Title>
        <Link href="/">
          <span className="marker marker-sky">{meta.title}</span>
        </Link>
      </Title>
      <p>{meta.description}</p>
      <Image
        src="/img/me.jpg"
        alt={meta.name}
        width="100"
        height="100"
        className="inline rounded-full my-4 border-4 border-gray-700 bg-gray-700 dark:bg-white dark:border-white"
      />
    </>
  )
}
