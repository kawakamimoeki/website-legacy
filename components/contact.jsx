import Heading from './heading.jsx'

export default function Component(props) {
  return (
    <div className="mb-5">
      <Heading>Contact</Heading>
      <p>
        Welcome emails:{' '}
        <a className="underline" href="mailto: me@moeki.dev">
          me@moeki.dev
        </a>
      </p>
    </div>
  )
}
