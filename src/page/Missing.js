import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <>
    <h1 className='text-2xl font-semibold text-center py-20'>Oops The Page You Are Looking For Is Not Available !!</h1>
    <h2 className='text-center'><Link to={"/home"}> <span className='px-2 py-2 rounded text-base font-semibold bg-white hover:bg-black hover:text-slate-50'>Click me</span> </Link> to redirect to the Home page</h2>
    </>
  )
}

export default Missing