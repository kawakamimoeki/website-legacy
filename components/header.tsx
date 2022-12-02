import React from 'react'
import Image from 'next/image'
import { useLocale } from '../hooks/use-locale'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { IoMoon, IoSunny } from 'react-icons/io5'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'

export default function Header() {
  const { t, locales } = useLocale()
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  return (
    <div>
      <div className="flex items-center max-w-2xl mx-auto px-4">
        <Link href="/" passHref>
          <Image
            src="/img/kawakamimoeki.jpg"
            alt={t.name}
            width="40"
            height="40"
            className="inline rounded-full my-4 border-2 border-gray-700 bg-gray-700 dark:bg-white dark:border-white"
          />
        </Link>
        <div className="grow"></div>
        <div>
          <Link target="_blank" href="https://github.com/kawakamimoeki/website">
            <GoMarkGithub className="w-8" />
          </Link>
        </div>
        <div className="cursor-pointer">
          {theme === 'light' ? (
            <IoSunny className="w-8" onClick={() => setTheme('dark')} />
          ) : (
            <IoMoon className="w-8" onClick={() => setTheme('light')} />
          )}
        </div>
        {locales
          .map((l, i) => (
            <Link
              key={i}
              className={`mx-2 ${
                t.slug === l.slug ? 'opacity-50' : 'underline'
              }`}
              href="#"
              locale={l.slug}>
              {l.locale}
            </Link>
          ))
          .reduce((pre, cur) => (
            <>
              {pre} / {cur}
            </>
          ))}
      </div>
    </div>
  )
}
