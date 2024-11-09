import React from 'react'
import { NavLink } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export default function Home() {
    return (
        <>
        <div class="grid grid-rows-5 gap-4 h-full">
            <div class="grid grid-cols-2 grid-rows-1 gap-4 h-full">
                <div className="bg-blue-200 p-4 h-max bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farming.jpg')] bg-cover bg-center flex items-center justify-center rounded-lg">
                    <h1 className="mb-4 text-outline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white border-2 border-white md:text-5xl lg:text-9xl">
                        <span className="bg-clip-text text-transparent text-green-100 border-white">
                            Better Farming,
                        </span>
                        <p></p>
                        <span className="bg-clip-text text-transparent text-amber-100 border-white">
                            Calculated Farming.
                        </span>
                    </h1>
                </div>
                <div class="bg-gray-800 h-full bg-cover bg-center flex items-center justify-center rounded-lg">
                <Spline scene="https://prod.spline.design/Q8UeOw14KLvtLkO8/scene.splinecode" />
                </div>
            </div>

            <div class="grid grid-rows-1 gap-4 bg-blue-600 bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farming4.jpg')] bg-cover bg-center">
            <div class=" grid items-center justify-center ">
                    <div class="m-5 justify-center w-max p-4 text-center bg-[#f5f5dc] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold text-white dark:text-">Empowering Precision in Agriculture
                        </h5>
                        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                        Log in to access smart tools for optimizing your farm’s productivity.

                        </p>

                        <NavLink
                            to="/calculate"
                            class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse w-full sm:w-auto bg-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400 text-dark rounded-lg inline-flex px-4 py-2.5 dark:bg-green-400 dark:hover:bg-green-400 dark:focus:ring-green-300"
                        >
                        <div >
                                <div class="bg-green-400 rounded-sm h-9 text-center justify-items-center">
                                    Calculate
                                </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div class="grid grid-rows-1 gap-4 bg-blue-600 bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farming2.jpg')] bg-cover bg-center">
            <div class=" grid items-center justify-center">
                    <div class="m-5 justify-center w-max p-4 text-center bg-[#f5f5dc] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold text-white dark:text-">Work fast from anywhere
                        </h5>
                        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                            Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
                        </p>
                        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                <div class="text-left rtl:text-right">
                                    <div class="mb-1 text-xs">Download on the</div>
                                    <div class="-mt-1 font-sans text-sm font-semibold">
                                        Mac App Store
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-rows-1 gap-4 bg-blue-600 bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farming5.jpg')] bg-cover bg-center">
                <div class=" grid items-center justify-center">
                    <div class="m-5 justify-center w-max p-4 text-center bg-[#f5f5dc] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold text-white dark:text-">Work fast from anywhere
                        </h5>
                        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                            Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
                        </p>
                        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                <div class="text-left rtl:text-right">
                                    <div class="mb-1 text-xs">Download on the</div>
                                    <div class="-mt-1 font-sans text-sm font-semibold">
                                        Mac App Store
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-rows-1 gap-4 bg-blue-600 bg-[url('/home/nayan/Github/HackThisFallProject-Nov8-/Calculated_Farming/src/farming3.jpg')] bg-cover bg-center">
                <div class=" grid items-center justify-center">
                    <div class="m-5 justify-center w-max p-4 text-center bg-[#f5f5dc] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold text-white dark:text-">Work fast from anywhere
                        </h5>
                        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                            Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
                        </p>
                        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                <div class="text-left rtl:text-right">
                                    <div class="mb-1 text-xs">Download on the</div>
                                    <div class="-mt-1 font-sans text-sm font-semibold">
                                        Mac App Store
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}