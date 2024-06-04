import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import api from './utils/api';
import Post from './components/Post';
import Signup from './pages/Signup';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await api.get(`/posts?page=${page}`);
      const newPosts = res.data.posts;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setHasMore(page < res.data.totalPages);
    } catch (err) {
      console.error('Error fetching posts: ', err);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">MelodyVerse</h1>
            <InfiniteScroll
              dataLength={posts.length}
              next={() => setPage((prevPage) => prevPage + 1)}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
            >
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </InfiniteScroll>
          </div>
        }/>
      </Routes>
    </Router>
  );
};

export default App;
