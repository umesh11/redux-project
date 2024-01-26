import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import { postAdded, selectAllPosts } from './postSlice';
import { selectAllUsers } from 'features/users/usersSlice';



const AddPostForm = () => {
    const dispatch = useDispatch();
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const users = useSelector(selectAllUsers)
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const clearFormValues = () => {
      setTitle('');
       setContent('');
       setUserId('')
    }
    function onPostSave() {
        if(title && content){
            dispatch(postAdded(title, content, userId))
            clearFormValues();
        }
    }

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const onAuthorchanged = (e) => setUserId(e.target.value);

    const userOptions = users.map((user, idx) =>  (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))

  return (
    <>
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="post_title">Title</label>
            <input id="post_title" type="text" name="postTitle" onChange={handleTitleChange} value={title} />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorchanged}>
              <option value={''}></option>
             {userOptions}
            </select>
            
             <label htmlFor='post_content'>Content</label>
            <textarea id="post_content" type="text" name="postContent" onChange={handleContentChange} value={content} />
            <button disabled={!canSave} type="button" onClick={onPostSave}>Save Post</button>
        </form>
    </section>
    </>
  )
}

export default AddPostForm
