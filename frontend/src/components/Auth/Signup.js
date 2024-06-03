import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    profilePicture: ''
  });

  const [error, setError] = useState('');
  const history = useHistory();

  const { username, email, password, confirmPassword, name, profilePicture } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      history.push('/posts');
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input type="text" name="username" value={username} onChange={onChange} className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture URL</label>
          <input type="text" name="profilePicture" value={profilePicture} onChange={onChange} className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <input type="checkbox" name="terms" required /> I agree to the terms and conditions
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Sign Up</button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
