import React, { Component } from 'react';
import './sign-in.scss'

class SignIn extends Component {
  render() {
    return (
      <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
      </div>
    )
  }
}

export default SignIn