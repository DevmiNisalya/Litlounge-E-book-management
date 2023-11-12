import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom"
import './register.css';
import "firebase/auth";
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseInit'


export default function Register() {


    const navigate = useNavigate();
    const auth = getAuth(app);
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const createAcc =async() => {
      await  createUserWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert('Successfully logged in!')
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;
               // console.log(errorCode, errorMessage);
               alert(errorCode)
            });
      };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your username..."

                />
                <label>Email</label>
                <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your email..."
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <label>Password</label>
                <input 
                type="password" 
                className="registerInput" 
                placeholder="Enter your password..."                
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton" onClick={createAcc}>Register</button>
            </form>
            <button className="registerLoginButton" >
            {<Link className="link" to ="/login">LOGIN</Link>} 
            </button>
        </div>
    );
}
