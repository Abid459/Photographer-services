import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SocialSignIn from './SocialSignIn';


const SignUp = () => {
    const handlesubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='container-full'>
            <div className='login-text'>
                <p>Log in</p>
                <FontAwesomeIcon icon={['far', 'coffee']} size="6x" />
                <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
            <form onSubmit={handlesubmit} className="login">
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <button type='submit'>Log In</button>
                <SocialSignIn></SocialSignIn>
            </form>
        </div>
    );
};


export default SignUp;