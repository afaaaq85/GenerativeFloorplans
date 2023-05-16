import React, { useState } from 'react'
import logo from '../../assets/img/gfp5.png'
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'
import { useUserAuth } from '../../context/UserAuthContext';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const { login } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email,password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='logincontainer'>
        <img className='logo' src={logo} alt='logo' />
            <form className='login-form' onSubmit={handleSubmit}>
                <h3>Log In</h3>
                {error && <Alert variant='danger'>{error}</Alert>}
                <input
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                {/* <label>Password</label> */}
                <input
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                <Link to='/signup'><p>New to the website? Signup now! </p></Link>
            </form>

        </div>
    )
}

export default Login
