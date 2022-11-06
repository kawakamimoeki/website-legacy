import text from '../data/text.json'
import Heading from './heading.jsx'

export default function component() {
  return (
    <div className="mb-5">
      <Heading text="Topics" />
      {text.topics
        .map((topic, i) => {
          return <span key={i}>#{topic}</span>
        })
        .reduce((prev, curr) => [prev, ' / ', curr])}
    </div>
  )
}
