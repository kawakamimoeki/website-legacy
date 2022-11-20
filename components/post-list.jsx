import Link from 'next/link'
import Markdown from './markdown'
import Date from './date'

export default function Component({ posts }) {
  return (
    <ul>
      {posts.map(({ id, date, title, content }) => (
        <li className="py-5 border-2 p-6 my-4 rounded-md" key={id}>
          <h3 className="text-xl font-bold">
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
          </h3>
          <Date className="text-xs opacity-50" dateString={date}></Date>
          <Markdown className="text-xs" limit={256} content={content}></Markdown>
          <div className="mt-1 text-end">
            <Link
              className="underline decoration-yellow-400 decoration-2 underline-offset-4"
              href={`/blog/${id}`}>
              Read more →
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
