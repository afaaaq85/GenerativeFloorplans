import logo from '../../assets/img/gfp5.png'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import { Alert } from 'react-bootstrap';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            alert("Account created successfully!");
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='signup-container' style={{ margin: "10px" }}>
            <img className='logo' src={logo} alt='logo' />
            <form className='signup-form' onSubmit={handleSubmit}>
                <h3>Create Account</h3>
                {error && <Alert variant='danger'>{error}</Alert>}
                <input
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Sign Up</button>
                <Link to='/'><p>Already registered? Login here! </p></Link>
            </form>

        </div>
    )
}

export default Signup
