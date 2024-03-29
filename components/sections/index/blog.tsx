import Heading from '../../heading'
import PostList from '../../post-list'
import Link from 'next/link'
import { MdCallMade } from 'react-icons/md'
import React from 'react'
import { PostType } from '../../../interfaces/post'

type Props = {
  posts: Array<PostType>
}

export default function Blog({ posts }: Props): JSX.Element {
  return (
    <div className="mb-5">
      <Heading>
        <span className="">Blog</span>
      </Heading>
      <PostList posts={posts} />
    </div>
  )
}
