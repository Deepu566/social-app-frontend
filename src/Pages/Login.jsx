import React, { useContext, useRef, useState } from 'react'
import { loginCall } from '../apiCalls'
import { AuthContext } from "../context/AuthContext"
import { AiOutlineLoading } from "react-icons/ai"


export default function Login() {
    const [passwordType, setPasswordType] = useState("password")
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall(
            { email: email.current.value, password: password.current.value }
            , dispatch)
        console.log(user)
    }
    return (
        <div onSubmit={handleSubmit} className='h-screen bg-indigo-300 flex justify-center items-center ' >
            <div className='form-wrapper bg-white px-16 py-5 w-4/12 rounded-lg'>
                <div className='text-center mb-2'>
                    <h1 className='mb-2 font-bold text-2xl text-sky-900'>Social App</h1>
                    <h2 className='font-semibold text-gray-400'>Login</h2>
                </div>
                <form className='flex gap-5 flex-col justify-center mb-3'>
                    <input
                        ref={email}
                        type="email"
                        required={true}
                        placeholder='email'
                        className='placeholder:text-sm focus:outline-0 border-b py-3 px-3' />
                    <input
                        ref={password}
                        minLength={6}
                        type={passwordType}
                        required={true}
                        placeholder='password'
                        className='placeholder:text-sm focus:outline-0 border-b py-3 px-3 mb' />
                    <div className='flex itmes-center gap-3'>
                        <input id='checkbox' className='cursor-pointer' type="checkbox"
                            onClick={() => {
                                passwordType === "password" ?
                                    setPasswordType("text") : setPasswordType("password")
                            }} />
                        <label htmlFor="checkbox" className='text-sm cursor-pointer text- to-blue-400'>Show Password</label>
                    </div>
                    <button className='bg-blue-400 flex justify-center font-semibold py-2 text-white rounded-lg cursor-pointer'>
                        {isFetching ?
                            <AiOutlineLoading className='animate-spin   text-2xl' />
                            :
                            "Log In"}
                    </button>
                </form>

                <div className='text-center text-sm'>
                    <span>You don't have an account?</span>
                    <span className='text-blue-500 ml-2 cursor-pointer'>Register</span>
                </div>
            </div>
        </div>
    )
}
