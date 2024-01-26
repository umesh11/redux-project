import React from 'react'
import PostAuthor from './postAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';


const PostExcerpts = ({post}) => {
  return (
    <div>
      <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
              <PostAuthor 
               userId={post.userId}/>
               <TimeAgo timeStamp={post.created_at}/>
               <ReactionButton post={post}/>
            </p>
        </article>
    </div>
  )
}

export default PostExcerpts
