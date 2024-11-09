import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase config and initialization
const firebaseConfig = {

    apiKey: "AIzaSyAJ8sdQv4xkSKWicA2te_AB5A5CAUIrc-c",

    authDomain: "calculatedfarming.firebaseapp.com",

    projectId: "calculatedfarming",

    storageBucket: "calculatedfarming.firebasestorage.app",

    messagingSenderId: "788868871090",

    appId: "1:788868871090:web:666e2a66c24a01a88c6aab"

  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Header({ email = "null", password = "null" }) {
  const [loading, setLoading] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  //loggedOut is set to true after a successful logout,
  const [loggedOut, setLoggedOut] = useState(false); // Track successful logout
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setLoggedOut(true); // Set loggedOut to true on successful logout
      setTimeout(() => {
        setLoggedOut(false); // Reset after showing popup
      }, 3000); // Hide popup after 3 seconds
      navigate('/'); // Redirect to Layout
    } catch (error) {
      console.error("Logout failed: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-green-600 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://images.pexels.com/photos/29322422/pexels-photo-29322422.png"
              className="mr-3 h-12 rounded-md"
              alt="Logo"
            />
          </Link>
          
          <div className="flex items-center lg:order-2">
            {email !== "null" ? (
              <button
                onClick={handleLogout}
                className={`text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${
                  loading ? '' : loggedOut ? 'bg-green-500' : 'bg-orange-700 hover:bg-orange-800'
                }`}
              >
                {loading ? "" : "Logout"}
              </button>
            ) : (
              <>
                <NavLink to="/createaccount" className="text-white mr-4">Create Account</NavLink>
                <NavLink to="/login" className="text-white">Login</NavLink>
              </>
            )}
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/calculate"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Calculate
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/explore"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Explore
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Feedback"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Feedback/About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/googlegemini"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  GoogleGemini
                                </NavLink>
                            </li>
                        </ul>
                    </div>
        </div>
      </nav>
    </header>
  );
}
