import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign Out Successfull');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>React Firebase: Auth Details</title>
      </Helmet>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <p>You're not connected.</p>
          <p>
            Please <Link to="/sign-in">Sign In</Link> or{' '}
            <Link to="/sign-up">Sign Up</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
