import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.init2';


const LogOut = () => {

    
    const [ user, setUser] = useState(null)
    
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    
    const handleSignInGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result);
            setUser(result.user)
        })
       .catch(error => {
        console.log(error);
       })
    }

    const handleGoogleLogin = () => {
        console.log('Please Google Login !!!');
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => {
            console.log(error);
        })                
    }


    const handleGoogleLogOut = () => {
        // console.log('Google Log Out !!!');
        signOut(auth)
        .then(() => {
            console.log( 'Sign Out Completed ');
            setUser(null)
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <div>
            <h1>Please Login </h1>
            {/* <button onClick={handleGoogleLogin}>Login</button>
            <button onClick={handleGoogleLogOut}>Log Out</button> */}

            {
                user ?   <button onClick={handleGoogleLogOut}>Sign Out</button>
                : <>
                 <button onClick={handleGoogleLogin}>Sign in with Google</button>
                <button onClick={handleSignInGithub}>Sign In With Github</button>
                </>

            }


           {
            user &&  <div>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
         
        </div>
           }
        </div>
    );
};

export default LogOut;