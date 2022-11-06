import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  )

  return (
    <div>
      {locales
        .map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <span key={locale} className="inline-block p-2">
              {locale === activeLocale ? (
                <span>{locale}</span>
              ) : (
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={locale}
                  legacyBehavior>
                  <a className="underline">{locale}</a>
                </Link>
              )}
            </span>
          )
        })
        .reduce((prev, curr) => [prev, '/', curr])}
    </div>
  )
}
