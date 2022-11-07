import { useState } from 'react'
import { MdThumbUp } from 'react-icons/md'

export default function Component(props) {
  const [likeCount, setLikeCount] = useState(props.likeCount)
  const [liked, setLiked] = useState(false)
  const toggleLike = async () => {
    if (liked === false) {
      fetch('/api/like/create')
      setLikeCount(likeCount + 1)
      setLiked(true)
    }
  }
  return (
    <>
      <span className={liked ? 'text-blue-500' : undefined}>
        <span
          onClick={toggleLike}
          className="ml-4 mb-4 align-bottom cursor-pointer inline-block bg-white border-2 border-gray-800 rounded-full px-4">
          <MdThumbUp className="inline mr-2" />
          {likeCount}
        </span>
      </span>
      <span className="inline-block ml-4 mb-4 align-bottom">
        {liked && <span>Thank you!</span>}
      </span>
    </>
  )
}
