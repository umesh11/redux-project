import React from "react";
import Counter from "./features/counter/counter";
import PostList from "features/posts/PostList";
import AddPostForm from "features/posts/AddPostForm";


function App() {
  return (
    <>
    <main>
      <AddPostForm />
      <PostList />
      {/* <Counter /> */}
      </main>
    </>
  );
}

export default App;
