import text from '../data/text.json'
import Image from 'next/image'
import Title from '../components/title'
import Link from 'next/link'

export default function Component() {
  return (
    <>
      <Title>
        <Link href="/">
          <span className="marker marker-sky">{text.title}</span>
        </Link>
      </Title>
      <p>{text.description}</p>
      <Image
        src="/img/me.jpg"
        alt={text.name}
        width="100"
        height="100"
        className="inline rounded-full my-4 border-4 border-gray-700 bg-gray-700 dark:bg-white dark:border-white"
      />
    </>
  )
}
