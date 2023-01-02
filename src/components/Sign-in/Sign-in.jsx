import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../FormInput/FormInput';
import Button, { OutLineButton } from '../button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email,password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email,password);

      this.setState({ 
        email: '',
        password: '',
     });

      window.location.href = './'

    }catch(error){
     alert(error);
     this.setState({ 
      email: '',
      password: '',
   });
    }

    

  }

 
  handleChange = e => {

    const { value,name } = e.target;

    this.setState({ [name] : value })
  }


  render() {
    return (
      <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>


         <form onSubmit={this.handleSubmit} >

         <FormInput 
         name="email"
         value={this.state.email}
         required
         handleChange={this.handleChange}
         type='Email'
         label='Email'/>        
         
         <FormInput 
        name='password' 
        value={this.state.password} 
        required
        handleChange={this.handleChange} 
        type='password'
        label='Password'/>

         <div className="buttons">
          
         <Button type='submit'> Sign In</Button>

         <OutLineButton 
          onClick={signInWithGoogle}
         >Sign In With Google</OutLineButton>

         </div>        


         </form>



         
      </div>
    )
  }
}

export default SignIn