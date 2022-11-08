import text from '../data/text.json'
import Heading from './heading.jsx'

export default function component() {
  return (
    <div className="mb-5">
      <Heading text="How to implement beatiful products" />
      <ul className="list-decimal list-inside">
        {text.values.map((value, i) => {
          return <li key={i}>{value}</li>
        })}
      </ul>
    </div>
  )
}
