import React from 'react'
import links from '../../../datas/links.json'
import Link from 'next/link'
import Heading from '../../heading'
import { MdCallMade } from 'react-icons/md'

export default function Links() {
  return (
    <div className="mb-5">
      <Heading>Links</Heading>
      {links.map((link, i) => {
        return (
          <div key={i} className="mb-2  ">
            <h3 className="opacity-50">{link.name}</h3>
            {link.accounts.map((account, j) => {
              return (
                <Link
                  key={j}
                  href={account.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block">
                  {account.name}
                  <MdCallMade className="inline ml-1" />
                </Link>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
