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
      <p>{"Hello. I'm a web developer in Japan."}</p>
      <Image
        src="/img/moeki.svg"
        alt="Moeki Kawakami"
        width="100"
        height="100"
        className="inline rounded-full my-4"
      />
    </>
  )
}
