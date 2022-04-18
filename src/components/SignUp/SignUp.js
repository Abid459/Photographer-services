import React, { useState } from 'react';
import SocialSignIn from '../SocialSignIn';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error2,
      ] = useCreateUserWithEmailAndPassword(auth);
    //states
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [confirmPassword,setConfirPassword] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')


    //hooks
    const navigate = useNavigate();
    
    
    //functions
    const handleFormClick =(e)=>{
        const value = e.target.value;
        const type = e.target.name;
        type==='email'?setEmail(value): type === 'password'?setPassword(value) : type==='confirmPassword'? setConfirPassword(value):setError('Something not right');
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email,password);
        console.log(email,password)
        // if(  password === confirmPassword){
        //     createUserWithEmailAndPassword(email,password)
        // }
        // else{
        //     setError('Please confirm your password')
        // }
    }
    
    return (
        <div className='container-full'>
            <div className='login-text'>
                <p>Sign Up</p>
            </div>
            <form onSubmit={handlesubmit} onChange={handleFormClick} className="login">
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' />
                <button>sign Up</button>
                <span>{error + error2}</span>
                <SocialSignIn></SocialSignIn>
                <p>Already Registered? <span onClick={()=>navigate('/login')} style={{color:'blue',cursor:'pointer'}}>Log In</span> </p>
            </form>
        </div>
    );
};


export default SignUp;