import Image from 'next/image'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'

export default function Header() {
  return (
    <div className="z-10 fixed w-full text-gray-900 dark:text-white">
      <div className="flex items-center max-w-4xl mx-auto px-4">
        <Link href="/" passHref>
          <Image
            src="/img/moeki.png"
            alt="Moeki Kawakami"
            width="40"
            height="40"
            className="inline rounded-full my-3"
          />
        </Link>
        <div className="grow"></div>
        <div>
          <Link href="https://github.com/kawakamimoeki/website">
            <GoMarkGithub className="w-8" />
          </Link>
        </div>
      </div>
    </div>
  )
}
