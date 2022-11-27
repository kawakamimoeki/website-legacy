import Title from '../..//title'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '../../../hooks/use-locale'

export default function Mainvisual() {
  const { t, locales } = useLocale()
  return (
    <>
      <Title>
        <Link href="/">
          <span className="marker marker-sky">{t.title}</span>
        </Link>
      </Title>
      <p>{t.description}</p>
      <Image
        src="/img/kawakamimoeki.jpg"
        alt={t.name}
        width="100"
        height="100"
        className="inline rounded-full my-4 border-4 border-gray-700 bg-gray-700 dark:bg-white dark:border-white"
      />
    </>
  )
}
