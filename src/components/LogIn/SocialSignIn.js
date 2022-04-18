import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import React from 'react';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className="icons">
            <FontAwesomeIcon onClick={()=>signInWithGoogle()} className='icon' icon={faGoogle} />
            <FontAwesomeIcon className='icon' icon={faGithub} />
            <FontAwesomeIcon className='icon' icon={faFacebook} />
        </div>
    );
};

export default SocialSignIn;