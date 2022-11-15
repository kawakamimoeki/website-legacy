import Heading from './heading.jsx'
import Dotted from './dotted'

export default function component() {
  return (
    <div className="mb-5">
      <Heading>
        Technology for <span className="marker marker-sky">Creativity</span>
      </Heading>
      <p>
        I have been saved by technology. However, it has not saved my life or
        solved my problems. It has nurtured my creativity. Photography, music
        and software. Without computer technology, I would never have been able
        to actually put the ideas in my head into reality.{' '}
        <Dotted>
          It was a world where we could show our photos to many people without
          exhibition, and where we could make music without playing an
          instrument
        </Dotted>
        . I want to make poeple creative with computer technology.
      </p>
    </div>
  )
}
