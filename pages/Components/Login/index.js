import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Image from "next/image";
import LoginImage from '../../../public/pic35.png';
import Router from "next/router"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            // Perform login logic
            setIsLoggedIn(true);
            const data = await login(email, password);
            if (data.success) {
                // Redirect to home page upon successful login
                // Use Next.js router for client-side navigation
                Router.push('/');
                toast.success('Login successful!');
            } else {
                setError(data.message || 'An error occurred while logging in');
                toast.error('Login failed!');
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
            setError('An error occurred while logging in');
            toast.error('An error occurred while logging in');
        }
    };

    const login = async (email, password) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    };

    const handleLogout = () => {
        // Perform logout logic
        setIsLoggedIn(false);
    };

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <ToastContainer />
            <section className="login4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="reg2">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="login5">
                                            <Image src={LoginImage} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="login2">
                                            <h4>LOGIN </h4>
                                            <div className="mb-3 reg3">
                                                <label htmlFor="email" className="form-label">
                                                    Email Address:
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Example@gmail.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3 reg3">
                                                <label htmlFor="password" className="form-label">
                                                    Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="Enter at least 8+ characters"
                                                    value={password}
                                                    autoComplete="current-password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3 reg3">
                                                <a href="forgot.php">Forgot Password</a>
                                                <button type="button" className="btn" onClick={handleLogin}>
                                                    Log in
                                                </button>
                                            </div>
                                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
