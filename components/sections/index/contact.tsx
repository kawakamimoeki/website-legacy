import Heading from '../../heading'
import React from 'react'

export default function Contact() {
  return (
    <div className="mb-5">
      <Heading>Contact</Heading>
      <p>
        Welcome emails:{' '}
        <a className="underline" href="mailto: info@kawakamimoeki.com">
          info@kawakamimoeki.com
        </a>
      </p>
    </div>
  )
}
