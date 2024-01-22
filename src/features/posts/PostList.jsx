import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { selectAllPosts } from './postSlice';

const PostList = (props) => {
    const posts = useSelector(selectAllPosts);
    

    const renderedPosts = (posts || []).map((post) => {
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    })
    console.log({renderedPosts})
  return (
    <>
   <section>
      <h2>Posts</h2>
      {renderedPosts}
   </section>
    </>
  )
}

export default PostList;
