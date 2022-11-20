import Gh from './gh'
import Heading from './heading'

export default function component() {
  return (
    <div className='mb-5'>
    <Heading>Contributions</Heading>
    <ul>
      <li className='py-2'>
        <Gh repo="forem/forem" />
      </li>
      <li className='py-2'>
        <Gh repo="ElMassimo/vite_ruby" />
      </li>
    </ul>
    </div>
  )
}