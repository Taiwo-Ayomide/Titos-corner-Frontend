// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { loginSuccess } from '../redux/userRedux';
import axiosInstance from '../requestMethods';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);


  const handleClick = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('All fields are necessary');
      return;
    }

    const user = { email, password };

    try {
      const response = await axiosInstance.post('/users/login', user);
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken); // Store accessToken
          alert('Welcome');
          dispatch(loginSuccess(response.data));
          navigate('/'); // Redirect to homepage
        } else {
          console.error('AccessToken not found in response data');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <main className="w-full h-auto bg-gray-100 pb-48">
      <div className="pt-24 text-center">
        <h1 className="font-semibold text-2xl text-blue-700">TITO'S CORNER</h1>
      </div>
      <section className="flex justify-center items-center ms-4 me-4">
        <div className="bg-white w-96 mt-6 pb-2 pt-6 xl:w-100 lg:w-100 h-auto rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl font-sans">Welcome, Please Login</h1>
          </div>
          <div className="ms-4 me-4 pt-6">
            <form onSubmit={handleClick}>
              <div>
                <label htmlFor="email">Email:</label> <br />
                <input
                  type="text"
                  className="w-full border-2 border-blue-700 border-solid rounded-lg h-10 pr-5 pl-5"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  className="w-full border-2 border-blue-700 border-solid rounded-lg h-10 pr-5 pl-5"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="w-full bg-blue-700 text-white text-xl font-sans cursor-pointer hover:rounded-full h-12"
                  disabled={isFetching}
                />
              </div>
            </form>
            <div className="text-center mt-4 mb-6">
              <p>
                Don't have an account? Sign up{' '}
                <Link to="/register" style={{ color: 'blue' }}>
                  Here
                </Link>
              </p>
              <p>
                Return Home{' '}
                <Link to="/" style={{ color: 'blue' }}>
                  Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
