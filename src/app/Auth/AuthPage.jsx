import AuthLayout from '@/components/layouts/AuthLayout';
import React from 'react';
import SignIn from './SignIn';
import Signup from './Signup';

const SignInPage = () => {
  return (
    <>
      {/* If you want to pass component inside another component use this  */}
      <AuthLayout
        title="Welcome Back"
        description="Please enter your details in Sign In"
      >
        <SignIn />
      </AuthLayout>
    </>
  );
};

const SignUpPage = () => {
  return (
    <>
      <AuthLayout
        title="Create Account"
        description="Please fill the form in Sign Up"
      >
        <Signup />
      </AuthLayout>
    </>
  );
};

export { SignInPage, SignUpPage };
