import Heading from './heading.jsx'
import Dotted from './dotted'

export default function component() {
  return (
    <div className="mb-5">
      <Heading>Values</Heading>
      <ul className="list-decimal list-inside">
        <li>
          Starting from <Dotted>myself</Dotted> to improve my team
        </li>
        <li>
          Starting with <Dotted>my neighbors</Dotted> to create a culture
        </li>
        <li>
          Making <Dotted>minimal product first</Dotted> to get feedback
        </li>
        <li>
          <Dotted>Looking at</Dotted> our daily development
        </li>
        <li>
          Solving our <Dotted>own problems</Dotted>, not generality
        </li>
      </ul>
    </div>
  )
}
