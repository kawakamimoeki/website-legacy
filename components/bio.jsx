import text from '../data/text.json'
import Heading from './heading.jsx'
import Link from 'next/link'

export default function component() {
  return (
    <div className="mb-5">
      <Heading>Bio</Heading>
      <dl>
        <div className="flex">
          <dt className="font-bold mr-4 min-w-fit">1996</dt>
          <dd>Born in Tochigi, Japan</dd>
        </div>
        <div className="flex">
          <dt className="font-bold mr-4 min-w-fit">2019</dt>
          <dd>
            B.S. in Electronics and Informatics, Kanazawa University, Kanazawa,
            Japan
          </dd>
        </div>
        <div className="flex">
          <dt className="font-bold mr-4 min-w-fit">2019</dt>
          <dd>
            Joined{' '}
            <Link
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.colorfulcompany.co.jp/">
              Colorful Company,Inc.
            </Link>
          </dd>
        </div>
      </dl>
    </div>
  )
}
