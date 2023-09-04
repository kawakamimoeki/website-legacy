import Title from '../..//title'
import Link from 'next/link'
import Image from 'next/image'

export default function Mainvisual() {
  return (
    <div className="mb-5">
      <Title>
        <Link href="/">
          <span className="">@moekidev</span>
        </Link>
      </Title>
      <p>{"Hello. I'm a web developer in Japan."}</p>
    </div>
  )
}
