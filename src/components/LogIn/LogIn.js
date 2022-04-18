import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialSignIn from '../SocialSignIn';


const LogIn = () => {

const navigate = useNavigate();
const location = useLocation();
const [user,loading] = useAuthState(auth);

    const handlesubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from,{replace:true})
    }

    return (
        <div className='container-full'>
            <div className='login-text'>
                <p>Log in</p>
            </div>
            <form onSubmit={handlesubmit} className="login">
                <input type="email" name="email" placeholder='Email'  required/>
                <input type="password" name="password" placeholder='Password' required/>
                <button type='submit'>Log In</button>
                <SocialSignIn></SocialSignIn>
                <p>New User? <span onClick={()=>navigate('/signup')} style={{color:'blue',cursor:'pointer'}}>Register Here</span> </p>
            </form>
        </div>
    );
};

export default LogIn;