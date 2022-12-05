import React from 'react'
import Link from 'next/link'
import Markdown from './markdown.jsx'
import Date from './date'

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map(({ id, date, title, content }) => (
        <li className="py-2" key={id}>
          <h3 className="text-lg">
            <Link href={`/blog/${id}`} passHref>
              {title}
            </Link>
          </h3>
          <Date className="text-xs opacity-50" dateString={date}></Date>
        </li>
      ))}
    </ul>
  )
}
