import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
