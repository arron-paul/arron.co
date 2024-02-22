import Link from 'next/link'
import Date from '@/components/date'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export default function IndexPage() {
  const allPostsData: AllPostsData = getSortedPostsData()
  return (
    <>
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <div>
                <Link href={`/journal/${id}`}>{title}</Link>
              </div>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
