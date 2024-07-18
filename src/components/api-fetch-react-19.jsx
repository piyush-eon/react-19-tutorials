import { use } from "react";

function PostsReact19() {
  // Use `use` to suspend until the promise resolves
  const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  //Limitation - will create a new promise on every render

  const posts = use(fetchPosts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsReact19;
