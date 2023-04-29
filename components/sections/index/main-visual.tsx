import Title from '../..//title'
import Link from 'next/link'
import Image from 'next/image'

export default function Mainvisual() {
  return (
    <>
      <Title>
        <Link href="/">
          <span className="">Moeki Kawakami</span>
        </Link>
      </Title>
      <p>こんにちは。はじめまして。</p>
      <Image
        src="/img/moeki.jpg"
        alt="Moeki Kawakami"
        width="100"
        height="100"
        className="inline rounded-full my-4 border-4 border-gray-700 bg-gray-700 dark:bg-white dark:border-white"
      />
    </>
  )
}
