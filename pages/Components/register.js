import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="reg7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <form onSubmit={handleSubmit}>
                <div className="reg2">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <div className="reg8">
                        <Image src="/pic34.png" width={100} height={420} className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <div className="login2">
                        <h4>Create an Account</h4>
                        <div className="mb-3 reg3">
                          <label htmlFor="name" className="form-label">Full Name:</label>
                          <input type="text" id="name" name="name" className="form-control" placeholder="Enter Full name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3 reg3">
                          <label htmlFor="email" className="form-label">Email Address:</label>
                          <input type="email" id="email" name="email" className="form-control" placeholder="Example@gmail.com" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3 reg3">
                          <label htmlFor="password" className="form-label">Password:</label>
                          <input type="password" id="password" name="password" className="form-control" placeholder="Enter at least 8+ characters" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3 reg3">
                          <button type="submit" className="btn">Sign Up</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <div className="reg9 mt-3">
                      <Link href='/Components/Login'><i className="fa-brands fa-apple" />&nbsp; &nbsp; &nbsp; Continue with Apple</Link>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <div className="reg10 mt-3">
                        <a href="#"><i className="fa-brands fa-google" />&nbsp; &nbsp; &nbsp; Continue with Google</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
