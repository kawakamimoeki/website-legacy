import { useRouter } from 'next/router'
import en from '../locales/en'
import ja from '../locales/ja'

export const useLocale = () => {
  const { locale } = useRouter()
  const locales = [en, ja]
  const t = locales.filter((l) => {
    return l.meta.slug === locale
  })[0]
  return { t, locales }
}
