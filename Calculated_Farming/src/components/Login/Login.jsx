import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>
        <div class="bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farm.jpg')] bg-cover bg-center h-[500px] overflow-auto">
        <form class="max-w-sm mx-auto mt-20 mb-20">
                <div className='grid grid-rows-1 items-center justify-center text-white text-4xl mb-5 font-extrabold'>
                    <h1>
                        Login User
                    </h1>
                </div>
                <div class="">
                    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-dark">
                        Your email:
                    </label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-2" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-dark">
                        Your password:
                    </label>
                    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block text-sm font-medium text-white dark:text-dark">
                        Repeat password:
                    </label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">
                    login
                </button>
                <NavLink
                            to="/createAccount"
                            class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-full sm:w-auto bg-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400 text-dark rounded-lg inline-flex px-4 py-2.5 dark:bg-green-400 dark:hover:bg-green-400 dark:focus:ring-green-300"
                        >
                        <div >
                                <div class="text-dark bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-700 dark:focus:ring-amber-700 w-48">
                                Don't have an account?
                                </div>
                        </div>
                        </NavLink>
            </form>
        </div>
            
        </>
    )
}

export default Login
