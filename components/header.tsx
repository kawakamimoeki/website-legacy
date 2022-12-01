import React from 'react'
import Image from 'next/image'
import { useLocale } from '../hooks/use-locale'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { IoMoon, IoSunny } from 'react-icons/io5'
import Link from 'next/link'

export default function Header() {
  const { t, locales } = useLocale()
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  return (
    <div
      style={{
        background: 'rbga(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
      className="z-10 fixed w-full text-gray-900 dark:text-white">
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
        <div className="mx-2 cursor-pointer">
          {theme === 'light' ? (
            <IoSunny onClick={() => setTheme('dark')} />
          ) : (
            <IoMoon onClick={() => setTheme('light')} />
          )}
        </div>
        {locales
          .map((l, i) => (
            <Link
              key={i}
              className={`mx-2 ${
                t.meta.slug === l.meta.slug ? 'opacity-50' : 'underline'
              }`}
              href="#"
              locale={l.meta.slug}>
              {l.meta.name}
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
