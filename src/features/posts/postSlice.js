import {createSlice, nanoid} from '@reduxjs/toolkit';


const initialState = [
    {
        id: 1,
        title: 'Mission chapter 1',
        content: 'Crime Thriller',
    },
    {
        id: 2,
        title: 'Captain Miller',
        content: 'retro style movie'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded: {
        reducer(state, action) {
        const { payload } = action
         state.push(payload);
      },
       prepare(title, content, userId){
        return {
            payload: {
                id: nanoid(),
                title,
                content,
                userId,
            }
        }
       }
      }
    }
})

export const selectAllPosts = (state) =>  state.posts; 
export const { postAdded} =  postsSlice.actions;

export default postsSlice.reducer;