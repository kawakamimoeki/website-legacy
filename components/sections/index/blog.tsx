import Heading from '../../heading'
import PostList from '../../post-list'
import Link from 'next/link'
import React from 'react'

export default function Blog({ posts }): JSX.Element {
  return (
    <div className="mb-5">
      <Heading>
        <span className="marker marker-yellow">Blog</span>
      </Heading>
      <PostList posts={posts} />
      <div className="text-center">
        <Link
          className="underline decoration-yellow-300 decoration-4 underline-offset-4 font-bold"
          href="/blog"
          passHref>
          Read more posts →
        </Link>
      </div>
    </div>
  )
}
