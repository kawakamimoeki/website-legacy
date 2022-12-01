import Link from 'next/link'
import Markdown from './markdown.jsx'
import Date from './date'

export default function PostPreview({ post }) {
  return (
    <li className="py-5 border-2 p-6 my-4 rounded-md" key={post.sys.id}>
      <h3 className="text-xl font-bold">
        <Link href={`/blog/${post.sys.id}/${post.fields.slug}`} passHref>
          {post.fields.title}
        </Link>
      </h3>
      <Date
        className="text-xs opacity-50"
        dateString={post.sys.createdAt}></Date>
      <Markdown
        className="text-xs"
        limit={256}
        content={post.fields.content}></Markdown>
      <div className="mt-1 text-end">
        <Link
          className="underline decoration-yellow-400 decoration-2 underline-offset-4"
          href={`/blog/${post.sys.id}/${post.fields.slug}`}
          passHref>
          Read more →
        </Link>
      </div>
    </li>
  )
}
