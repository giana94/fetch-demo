// PostingData.jsx
import React, { useState } from 'react';
import usePost from '../hooks/usePost';
import Loading from './Loading.jsx';

// // Display a list of posts
// const PostingData = () => {
  
//     return <div>Post data starter</div>;
//   };
  
//   export default PostingData;


const PostingData = () => {
  const { postData, response, error, isLoading } = usePost();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    postData('http://localhost:3000/posts', { title, body });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <div>
      {response ? (
        <div>
          <h2>Response:</h2>
          <p>Post ID: {response.id}</p>
          <p>Title: {response.title}</p>
          <p>Body: {response.body}</p>
          <button onClick={() => window.location.reload()}>Go Back</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PostingData;
