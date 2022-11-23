import Heading from './heading'
import Repos from './repos'

export default function component({ repos }) {
  return (
    <div className="mb-5">
      <Heading>Contributions</Heading>
      <Repos repos={repos}></Repos>
    </div>
  )
}
