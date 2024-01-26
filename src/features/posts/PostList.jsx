import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from './postSlice';
import PostAuthor from './postAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';
import PostExcerpts from './PostExcerpts';

const PostList = (props) => {
  const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postError = useSelector(getPostsError);
    const postStatus = useSelector(getPostsStatus);

    useEffect(() => {
      if(postStatus == 'idle'){
        dispatch(fetchPosts());
      }
    }, [postStatus, dispatch]);
    

    const renderedPosts = (posts || []).map((post) => {
        return <PostExcerpts key={post.id} post={post} />
    })
    
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
