// Post.js

import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
};

export default Post;
