import Heading from '../../heading'
import Link from 'next/link'
import React from 'react'
import Bio from '../../description'
import { useLocale } from '../../../hooks/use-locale'

export default function Bios(): JSX.Element {
  const { t } = useLocale()

  return (
    <div className="mb-5">
      <Heading>Bio</Heading>
      <dl>
        <Bio title={<>1996</>} detail={<>{t.bio.born}</>} />
        <Bio title={<>2019</>} detail={<>{t.bio.bs}</>} />
        <Bio
          title={<>2019</>}
          detail={<div dangerouslySetInnerHTML={{ __html: t.bio.cc }} />}
        />
      </dl>
    </div>
  )
}
