import Link from 'next/link'
import Markdown from './markdown.jsx'
import Date from './date'

export default function PostPreview({ post }) {
  return (
    <li className="py-5 border-2 p-6 my-4 rounded-md" key={post.sys.id}>
      <h3 className="text-lg">
        <Link href={`/blog/${post.sys.id}/${post.fields.slug}`} passHref>
          {post.fields.title}
        </Link>
      </h3>
      <Date
        className="text-xs opacity-50"
        dateString={post.sys.createdAt}></Date>
    </li>
  )
}
