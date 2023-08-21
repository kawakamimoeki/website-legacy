import Title from '../..//title'
import Link from 'next/link'
import Image from 'next/image'

export default function Mainvisual() {
  return (
    <>
      <Title>
        <Link href="/">
          <span className="">@moekidev</span>
        </Link>
      </Title>
      <p>{"Hello. I'm a web developer in Japan."}</p>
      <Image
        src="/img/moeki.png"
        alt="@moekidev"
        width="100"
        height="100"
        className="inline rounded-full my-4"
      />
    </>
  )
}
