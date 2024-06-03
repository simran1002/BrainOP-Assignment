import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts', {
        headers: { 'x-auth-token': auth },
      });
      setPosts(res.data);
    };
    fetchPosts();
  }, [auth]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="mb-4 p-4 border border-gray-300">
          <h3 className="text-xl">{post.title}</h3>
          <p>{post.content}</p>
          <p className="text-gray-500">By {post.author.username} on {new Date(post.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
