import text from '../data/text.json'
import Heading from './heading.jsx'

export default function component() {
  return (
    <div className="mb-5">
      <Heading text={text.vision.title} />
      <ul className="list-disc list-inside">
        {text.vision.items.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
  )
}
