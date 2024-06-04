import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import PostList from './components/Posts/PostList';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
