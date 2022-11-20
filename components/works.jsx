import Gh from './gh'
import Heading from './heading'

export default function component() {
  return (
    <div className="mb-5">
      <Heading>Works</Heading>
      <ul>
        <li className="py-2">
          <Gh repo="cc-kawakami/micro-admin" />
        </li>
        <li className="py-2">
          <Gh repo="cc-kawakami/uchini" />
        </li>
        <li className="py-2">
          <Gh repo="cc-kawakami/barruun" />
        </li>
      </ul>
    </div>
  )
}
