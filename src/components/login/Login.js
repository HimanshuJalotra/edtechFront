import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div>
        <form action="">
            <p className='p-tp'>SignIn</p>
            <input type="text" name="" id="" placeholder='email' />
            <input type="password" name="" id="" placeholder='password' />
            <button>Login</button>
            <p className='p-bt'>Don't have an account? Sinup</p>

        </form>
    </div>
  )
}
