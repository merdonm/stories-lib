import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const FormGroup = ({ label, children }) => {
  return (
    <div className="form-group text-lg flex flex-col justify-center items-center py-5">
      <label className="">{label}</label>
      {children}
    </div>
  );
}
const Login = () => {
  const { formData, setFormData, handleChange, handleLoginSubmit,loginErr, registerFieldErr } = useContext(DataContext)
  
  useEffect(()=>{
  const initialDAta = JSON.parse(localStorage.getItem("formData")) || {email :"", password :""};
  setFormData(initialDAta)
},[setFormData])

  return (
    <form onSubmit={handleLoginSubmit} className="mx-[30%]  bg-gray-200 h-screen flex flex-col justify-center">
      <FormGroup label="Email">
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your Email"
          onChange={handleChange}
          className="py-2 outline-none border border-gray-200 rounded px-5 my-5 mx-5"
        />
      </FormGroup>
      <FormGroup label="Password">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="py-2 outline-none border border-gray-200 rounded px-5 my-5 mx-5"

        />
      </FormGroup>

      <button type="submit" className="mx-[43%] py-3 px-6 bg-gray-100 rounded-md ">Login</button>
      {loginErr && <p className="text-lg px-24 py-20">{loginErr} click here to <Link to={"/register"}> <span className="bg-slate-100 py-2 px-4 rounded-lg hover:text-white hover:bg-slate-400"> Register</span> </Link></p>}
      {registerFieldErr && <p className="text-center fixed bottom-[18%] left-0 right-0">{registerFieldErr}</p>}
    </form>
  );
};

export default Login;
