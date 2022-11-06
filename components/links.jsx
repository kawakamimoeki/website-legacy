import text from '../data/text.json'
import Link from 'next/link'
import Heading from './heading'
import { MdCallMade } from 'react-icons/md'

export default function component() {
  return (
    <div className="mb-5">
      <Heading text="Links" />
      {text.links.map((link, i) => {
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
