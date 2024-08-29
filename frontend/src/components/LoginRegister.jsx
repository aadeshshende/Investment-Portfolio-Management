import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LoginRegister = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchToSignUp = () => {
    setIsSignIn(false);
  };

  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div className="auth-page">
      {isSignIn ? (
        <SignIn switchToSignUp={switchToSignUp} />
      ) : (
        <SignUp switchToSignIn={switchToSignIn} />
      )}
    </div>
  );
};

export default LoginRegister;
