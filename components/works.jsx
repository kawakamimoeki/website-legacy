import Heading from './heading'
import Repos from './repos'

export default function component({ repos }) {
  return (
    <div className="mb-5">
      <Heading>Works</Heading>
      <Repos repos={repos}></Repos>
    </div>
  )
}
