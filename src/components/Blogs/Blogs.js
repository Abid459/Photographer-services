import React from 'react';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className="blogs">
                <p><b>Question:</b> Difference between authorization and authentication</p>
                <br />
                <p><b>Answer: </b>Authentication is the process of identiying the user for providing access to the system. <br /> <i>On the other hand,</i> Authorization determines the level of aceess of a user. Authorization determines what resourses a user can access.
                    
                     </p>
                <br />
                <br />
                <p><b>Question:</b>  Why are you using firebase? What other options do you have to implement authentication?</p>
                <br />
                <p><b>Answer: </b>
                I am using Firebase for authentication system for my web app. Firebase has superior security over the local authentication system and easier to use. This is the reson i am using firebase.
                <br />
                <i>Other options for implementing authentication:</i>
                <br />
                <ul style={{marginLeft:'30px'}}>
                    <li>Auth0</li>
                    <li>Okta</li>
                    <li>Keycloak</li>
                    <li>Amazon Cognito</li>
                    <li>Passport</li>
                    <li>MangoDB</li>
                </ul>
                </p>
                <br />
                <br />
                <p><b>Question:</b>What other services does firebase provide other than authentication</p>
                <br />
                <p><b>Answer:</b> The most populer services of firebase other than authentication are:
                <br />
                <ul style={{marginLeft:'30px'}}>
                    <li>Hosting</li>
                    <li>Cloud storage</li>
                    <li>Google analytics</li>
                    <li>Dynamic Links</li>
                    <li>Cloud Firestore</li>
                    <li>Cloud Function</li>
                    <li>Cloud Messaging</li>
                </ul>
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;