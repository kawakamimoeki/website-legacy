import Heading from '../../heading'
import Link from 'next/link'
import React from 'react'
import Bio from '../../description'

export default function Bios(): JSX.Element {
  return (
    <div className="mb-5">
      <Heading>Bio</Heading>
      <dl>
        <Bio title={<>1996</>} detail={<>Born in Tochigi, Japan</>} />
        <Bio
          title={<>2019</>}
          detail={
            <>
              B.S. in Electronics and Informatics, Kanazawa University,
              Kanazawa, Japan
            </>
          }
        />
        <Bio
          title={<>2019</>}
          detail={
            <>
              Joined{' '}
              <Link
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.colorfulcompany.co.jp/">
                Colorful Company,Inc.
              </Link>
            </>
          }
        />
      </dl>
    </div>
  )
}
