import React from 'react';
import SignIn from '../components/auth/SignIn';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>React Firebase: Home</title>
      </Helmet>
      <h1>Home</h1>
      <p>Welcome!</p>
      <SignIn />
    </div>
  );
};

export default Home;
