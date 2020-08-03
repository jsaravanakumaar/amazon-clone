import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();

        if (email === undefined || email === null) {
            alert("invalid email!!!");
            return;
        }

        if (password === undefined || password === null || password.length < 8) {
            alert("Invalid password!!!");
            return;
        }

        if (email === "jsarava@gmail.com" && password === "passw0rd")
            history.push("/");
        else
            alert("Invalid email/password combination!");
    }

    const register = event => {
        event.preventDefault();
        history.push("/");
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email}  onChange={event => setEmail(event.target.value)}type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)}type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login__createAccountButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;