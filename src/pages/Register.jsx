'use client'
import React, { useState } from "react";
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nationality, setNation] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true); 

        try {
            const user = { fullname, email, nationality, password };

            if (fullname && email && nationality && password) {
                await axios.post("https://titos-corner.onrender.com/api/users/register", user)
                    .then(() => {
                        alert(`${fullname}, welcome to Tito's corner platform`);
                        // Reset the form fields
                        setName("");
                        setEmail("");
                        setNation("");
                        setPassword("");
                    });
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);  // Set loading to false after the request is completed
        }
    };

    return (
        <>
            <main className="w-full h-auto bg-gray-100 pb-48">
                <div className="pt-24 text-center">
                    <h1 className="font-semibold text-2xl text-blue-700">TITO'S CORNER</h1>
                </div>
                <section className="flex justify-center items-center ms-4 me-4">
                    <div className="bg-white w-96 mt-6 pb-2 pt-6 xl:w-100 lg:w-100 h-auto rounded-lg">
                        <div className="text-center">
                            <h1 className="text-2xl font-sans">Welcome, Please Register</h1>
                        </div>
                        <div className="ms-4 me-4 pt-6">
                            <form onSubmit={handleForm}>
                                <div>
                                    <label htmlFor="fullname">FullName:</label> <br />
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg h-10 pr-6 pl-6"
                                        name="fullname"
                                        value={fullname}
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="email">Email:</label> <br />
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg h-10 ps-6 pr-6 pl-6"
                                        name="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="nationality">Nationality:</label> <br />
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg h-10 ps-6 pr-6 pl-6"
                                        name="nationality"
                                        required
                                        value={nationality}
                                        onChange={(e) => setNation(e.target.value)}
                                    />
                                </div>
                                <div className="mt-6 relative">
                                    <label htmlFor="password">Password:</label> <br />
                                    <input type={showPassword ? "text" : "password"}
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg h-10 ps-6 pr-6 pl-6"
                                        name="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        <div className="pt-6">
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <input type="submit"
                                        value={loading ? "Loading..." : "Register"}  // Change the button text based on loading state
                                        disabled={loading}  // Disable the button while loading
                                        className="w-full bg-blue-700 text-white text-xl font-sans cursor-pointer hover:rounded-full h-12"
                                    />
                                </div>
                                <div className="pt-5">
                                    <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100">
                                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                                            <path fill="#1877F2" d="M24 12.073C24 5.403 18.627 0 12 0S0 5.403 0 12.073C0 18.095 4.388 23.002 10.125 24V15.564H7.078v-3.49h3.047v-2.659c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.236 2.686.236v2.982H15.4c-1.493 0-1.955.929-1.955 1.883v2.227h3.328l-.532 3.49h-2.796v8.436C19.612 23.002 24 18.095 24 12.073z" />
                                        </svg>
                                        <span className="text-gray-700">Continue with Facebook</span>
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-4 mb-6">
                                <p>Already have an account? sign in <Link to='/login' style={{ color: 'blue' }}>Here</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
