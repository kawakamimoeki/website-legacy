import text from '../data/text.json'
import Image from 'next/image'
import Like from './like.jsx'

export default function Component(props) {
  return (
    <>
      <h1 className="text-3xl mb-1 font-bold">{text.title}</h1>
      <p>{text.description}</p>
      <Image
        src="/me.jpg"
        alt={text.name}
        width="100"
        height="100"
        className="inline rounded-full my-4 border-4 border-gray-700 bg-gray-700"
      />
      <Like likeCount={props.likeCount} />
    </>
  )
}
