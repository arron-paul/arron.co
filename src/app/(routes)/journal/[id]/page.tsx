import Date from '@/components/date'
import { getPostData } from '@/lib/posts'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  content: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)
  return {
    title: postData.title,
  }
}

export default async function PostPage({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return (
    <>
      <section>
        <h1 className="font-bold">{postData.title}</h1>
        <div className="mb-5">
          <Date dateString={postData.date} />
        </div>
        <article>
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
      </section>
    </>
  )
}
