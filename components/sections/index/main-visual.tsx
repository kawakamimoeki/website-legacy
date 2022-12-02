import Title from '../..//title'
import Link from 'next/link'
import Image from 'next/image'

export default function Mainvisual() {
  return (
    <>
      <Title>
        <Link href="/">
          <span className="marker marker-sky">Moeki Kawakami</span>
        </Link>
      </Title>
      <p>Hi. I&apos;m Moeki Kawakami, software developer in Japan.</p>
      <Image
        src="/img/kawakamimoeki.jpg"
        alt="Moeki Kawakami"
        width="100"
        height="100"
        className="inline rounded-full my-4 border-4 border-gray-700 bg-gray-700 dark:bg-white dark:border-white"
      />
    </>
  )
}
