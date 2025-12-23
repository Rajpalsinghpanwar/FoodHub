import React from 'react'
import Signin from './Signin'
import Signup from './Signup'

function AuthLayout() {
  return (
    <div className='h-screen w-screen bg-black/30 flex justify-end'>
    {/* <Signin/> */}
    <Signup/>
    </div>
  )
}

export default AuthLayout