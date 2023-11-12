import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Corrected import
import './login.css';
import React from 'react';
import app from '../../firebaseInit';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const onPressLogin = async() => {
    navigate('/');
   await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
       // navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div className="login">
      <span className="LoginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>

        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="loginButton" onClick={onPressLogin}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
