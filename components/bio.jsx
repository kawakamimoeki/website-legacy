import text from '../data/text.json'
import Heading from './heading.jsx'

export default function component() {
  return (
    <div className="mb-5">
      <Heading text="Bio" />
      <div>
        {text.bio.map((b, i) => {
          return (
            <div key={i} className="flex">
              <dt className="font-bold mr-4">{b.year}</dt>
              <dd>{b.content}</dd>
            </div>
          )
        })}
      </div>
    </div>
  )
}
