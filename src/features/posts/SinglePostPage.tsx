import { Link, useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'

import { selectPostById } from './postsSlice'
import { TimeAgo } from '@/components/TimeAgo'
import { ReactionButtons } from './ReactionButton'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useAppSelector((state) => selectPostById(state, postId!))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <TimeAgo timestamp={post.date!} />
        <br />
        <br />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
