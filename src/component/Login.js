import React, { useEffect, useState } from 'react';
import { LoginApi } from '../api/login/login';
import NotifErr from './NotifErr';

const Login = () => {
    const [user, setUser] = useState({ userName: null, password: null, status: false })
    // const error handler
    const errorHandler = (data) => {
        if (data.userName == null || data.userName == "") {
            return "please enter the usename"
        }
        if (data.password == null || data.password == "") {
            return "please enter the password"
        }
        else {
            setUser(item => ({ ...item, status: true }))
        }
    }
    // send user data
    const send = () => {

        const userData = {
            "username": user.userName,
            "password": user.password
        }
        //   err handler 
        const err = errorHandler(user);
        if (err) {
            NotifErr(err)
        }
        if (user.status == true) {
            LoginApi(userData, (isoke, data) => {
                if (isoke) {
                    localStorage.setItem("token", data.token)
                }
            })

        }
    }

    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh] bg-gray-50'>
            <div className='w-3/12 flex flex-col justify-start items-center  p-[10px] h-[350px] shadow-2xl  bg-white'>
                <span className='text-[22px] font-bold'>login</span>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="userName" onChange={e => setUser(item => ({ ...item, userName: e.target.value }))} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" onChange={e => setUser(item => ({ ...item, password: e.target.value }))} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                </div>

                <button onClick={send} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </div>
    );
};

export default Login;