import React from "react";
import GoogleSignin from "../btn_google_signin_dark_pressed_web.png";
import {  signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
const Welcome = () => {
  const googleSignIn = () => {
    const provider=new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;