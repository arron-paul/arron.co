import Link from 'next/link'

import { allPosts } from '@/contentlayer'

export default function Home() {
  return (
    <ul className="prose dark:prose-invert mt-10">
      {allPosts.map((post) => (
        <li key={post._id} className="px-0">
          <Link href={post.slug}>
            <h2 className="py-0 mt-0 my-2">{post.title}</h2>
          </Link>
          <p className="py-0 mt-1">{post.description}</p>
        </li>
      ))}
    </ul>
  )
}
