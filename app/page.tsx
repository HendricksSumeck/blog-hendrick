import { allPosts } from "@/.contentlayer/generated"
import { formatDate } from "helpers/dateHelper"
import Link from "next/link"

export default function Posts() {
 return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          <h6>{formatDate(post.date)}</h6>
        </article>
      ))}
    </div>
  )
}
