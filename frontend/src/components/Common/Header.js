import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-2xl">MelodyVerse</h1>
      <nav>
        <Link to="/signup" className="mr-4">Sign Up</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  </header>
);

export default Header;
