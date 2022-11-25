import Heading from '../../heading'
import PostList from '../../post-list'
import Link from 'next/link'
import { MdCallMade } from 'react-icons/md'
import React from 'react'
import { Post } from '../../../interfaces/post'

type Props = {
  posts: Array<Post>
}

export default function Blog({ posts }: Props): JSX.Element {
  return (
    <div className="mb-5">
      <Heading>
        <span className="marker marker-yellow">Blog</span>
      </Heading>
      <PostList posts={[posts[0], posts[1]]} />
      <div className="text-center pt-5">
        <Link
          className="underline decoration-yellow-300 decoration-4 underline-offset-4 font-bold"
          href="/blog">
          Go to moeki.dev/blog
          <MdCallMade className="inline ml-1" />
        </Link>
      </div>
    </div>
  )
}
