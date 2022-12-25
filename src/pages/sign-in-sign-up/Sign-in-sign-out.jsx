import React from 'react';
import SignIn from '../../components/Sign-in/Sign-in';
import SignUp from '../../components/Sign-up/Sign-up';
import './sign-in-sign-up.scss'


const SignInSignOut = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInSignOut
