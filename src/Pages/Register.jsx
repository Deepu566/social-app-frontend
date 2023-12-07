import React, { useRef } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.current.value !== passwordAgain.current.value) {
            console.log("inside")
            alert("password does not match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user)
                navigate("/login")
            } catch (err) {
                console.log(err)
            }
        }

    }
    return (
        <div className='h-screen bg-indigo-300 flex justify-center items-center'  >
            <div className='form-wrapper bg-white px-16 py-5 rounded-lg w-4/12'>
                <div className='text-center mb-2'>
                    <h1 className='mb-2 font-bold text-2xl text-sky-900'>Social App</h1>
                    <h2 className='font-semibold text-gray-400'>Register</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex gap-5 flex-col justify-center mb-3'>
                    <input required ref={username} type="text" placeholder='Username' className='focus:outline-0 border-b py-3 px-3' />
                    <input required ref={email} type="email" placeholder='email' className='focus:outline-0 border-b py-3 px-3' />
                    <input minLength={6} required ref={password} type="password" placeholder='password' className='focus:outline-0 border-b py-3 px-3 mb' />
                    <input required ref={passwordAgain} type="password" placeholder='password again' className='focus:outline-0 border-b py-3 px-3 mb' />
                    <button className='bg-blue-400 font-semibold py-2 text-white rounded-lg cursor-pointer'>Sign Up</button>
                </form>
                <div className='text-center text-sm'>
                    <span>You do have an account?</span>
                    <span className='text-blue-500 cursor-pointer'>Login</span>
                </div>
            </div>
        </div>

    )
}
