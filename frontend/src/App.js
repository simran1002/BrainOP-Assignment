import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import PostList from './components/Posts/PostList';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={PostList} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
