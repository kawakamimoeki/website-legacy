import React from 'react'
import PostPreview from './post-preview'

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PostPreview key={post.sys.id} post={post}></PostPreview>
      ))}
    </ul>
  )
}
