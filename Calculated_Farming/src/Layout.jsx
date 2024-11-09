import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

function Layout() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [trackLogin, setTrackLogin] = useState(false); // true for login, false for register
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Firebase configuration
  const firebaseConfig = {

    apiKey: "AIzaSyAJ8sdQv4xkSKWicA2te_AB5A5CAUIrc-c",

    authDomain: "calculatedfarming.firebaseapp.com",

    projectId: "calculatedfarming",

    storageBucket: "calculatedfarming.firebasestorage.app",

    messagingSenderId: "788868871090",

    appId: "1:788868871090:web:666e2a66c24a01a88c6aab"

  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Registration function
  const registerNewAccBtnPressed = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.name,
        formData.password
      );
      console.log('Registered:', userCredential.user);
      setUserLoggedIn(true);
      navigate('/'); // Redirect to the homepage after successful registration
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('User already exists.');
      } else {
        setError('Failed to register. Please try again.');
      }
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const loginExistingUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.name,
        formData.password
      );
      console.log('Logged in:', userCredential.user);
      setUserLoggedIn(true);
      navigate('/'); // Redirect to the homepage after successful login
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('User does not exist.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else {
        setError('Failed to login. Please try again.');
      }
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Toggle between login and register forms
  const toggleForm = () => {
    setTrackLogin(!trackLogin);
    setError(''); // Clear errors when switching forms
  };

  if (userLoggedIn) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return (
      <div className="bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farm.jpg')] bg-cover bg-center h-screen">
        <form onSubmit={trackLogin ? loginExistingUser : registerNewAccBtnPressed} className="max-w-sm mx-auto mb-20">
          <div className="grid grid-rows-1 items-center justify-center text-dark text-4xl mb-5 font-extrabold">
            <h1>{trackLogin ? 'User Login' : 'Create User Account'}</h1>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark">
              Your email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark"
              placeholder="name@flowbite.com"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Your password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark"
              placeholder="password"
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            disabled={loading}
          >
            {loading ? 'Processing...' : trackLogin ? 'Login' : 'Register new account'}
          </button>
          <button
            type="button"
            onClick={toggleForm}
            className="text-dark bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 mt-4"
          >
            {trackLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
          </button>
        </form>
      </div>
    );
  }
}

export default Layout;
