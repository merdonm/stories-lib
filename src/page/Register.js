import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'

const FormGroup =({label,children})=>{
  return(
    <div className="form-group text-lg flex flex-col justify-center items-center py-2">
  <label>{label}</label>
  {children}

  </div>
  )
}

const Register = () => {

  const {registerFormData, setRegisterFormData, handleRegister, handleRegisterSubmit, registerError, registerFieldErr} = useContext(DataContext)
  useEffect(()=>{
    const InitialData = {fullName:"", email:"", password:"", confirmPassword:""}
    setRegisterFormData(InitialData)
  },[])
  return (
   <form onSubmit={handleRegisterSubmit} className='mx-[30%]  bg-gray-200 h-screen flex flex-col justify-center'>
    <FormGroup label={"Enter Your Name"}>
    <input 
    name='fullName'
    type='text'
    value={registerFormData?.fullName}
    onChange={handleRegister}
    className="py-2 outline-none border border-gray-200 rounded px-5 my-3 mx-5"
    />
    </FormGroup>
    <FormGroup label={"Enter Your Email "}>
    <input 
    name='email'
    type='email'
    value={registerFormData?.email}
    onChange={handleRegister}
    className="py-2 outline-none border border-gray-200 rounded px-5 my-5 mx-5"
    />
    </FormGroup>
    <FormGroup label={"Create Password"}>
    <input 
    name='password'
    type='password'
    value={registerFormData?.password}
    onChange={handleRegister}
    className="py-2 outline-none border border-gray-200 rounded px-5 my-5 mx-5"
    />
    <p>{registerError}</p>
    </FormGroup>
    <FormGroup label={"Confirm Password"}>
    <input 
    name='confirmPassword'
    type='password'
    value={registerFormData?.confirmPassword}
    onChange={handleRegister}
    className="py-2 outline-none border border-gray-200 rounded px-5 my-5 mx-5"
    />

    </FormGroup>
    <button type='Submit' className="mx-[43%] py-3 px-6 bg-gray-100 rounded-md ">Submit</button>
    {registerFieldErr && <p className='fixed bottom-10 left-0 right-0 text-center'>{registerFieldErr}</p>}

   </form>
  )
}

export default Register