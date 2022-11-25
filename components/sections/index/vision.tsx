import React from 'react'
import Heading from '../../heading'
import Dotted from '../../dotted'
import { useLocale } from '../../../hooks/use-locale'

export default function Vision() {
  const { t } = useLocale()
  return (
    <div className="mb-5">
      <Heading>
        Technology <span className="marker marker-sky">Lead</span> People
      </Heading>
      <Dotted>
        <i>{t.phrase}</i>
      </Dotted>
      <p>{t.story}</p>
    </div>
  )
}
