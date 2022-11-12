import text from '../data/text.json'
import Heading from './heading.jsx'

export default function component() {
  return (
    <div className="mb-5">
      <Heading text={text.vision.title} />
      <p>{text.vision.description}</p>
    </div>
  )
}
