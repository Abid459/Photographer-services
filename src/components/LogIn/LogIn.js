
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialSignIn from '../SocialSignIn';
import { updatePassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [password, setPassword] = useState('');
    const [email,setEmail] =useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
      const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
      console.log(error1)

    const notify = () => toast("Wow so easy!");

    const handlesubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password)
        console.log(email, password)
    }

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }

    const  handleforgetPassword = async() =>{
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else{
            toast('Enter your Email address')
        }
    }

    return (
        <div className='container-full'>
            <div className='login-text'>
                <p>Log in</p>
            </div>
            <form onSubmit={handlesubmit} className="login">
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder='Email' required />
                <input className='lastInput' type="password" name="password" placeholder='Password' required />
                <p className='passforget' onClick={handleforgetPassword}>forget password?</p>
                <button type='submit'>Log In</button>
                <SocialSignIn></SocialSignIn>
                <p>New User? <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>Register Here</span> </p>
                <span style={{color:'red'}}>{error1&&'Input email and password is wrong'}</span>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default LogIn;