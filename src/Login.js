import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core"
import { auth, provider } from './firebase';

function Login() {
    const signIn = e => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://i.computer-bild.de/imgs/1/2/3/0/0/0/3/3/Discord-Logo-1024x576-59e8699d53ce6edf.jpg"
                    alt=""
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
