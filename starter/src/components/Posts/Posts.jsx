import React from 'react';
import './Posts.css';
import PostsData from '../../Data/PostsData'; // Ensure this is a default export
import Post from '../Post/Post'; // Corrected path for Post component

const Posts = () => {
  return (
    <div className="Posts">
      {/* Ensure PostsData is an array */}
      {Array.isArray(PostsData) && PostsData.length > 0 ? (
        PostsData.map((post, id) => (
          <Post data={post} key={id} />
        ))
      ) : (
        <p>No posts available</p> // Handle case where PostsData is empty or undefined
      )}
    </div>
  );
};

export default Posts;
