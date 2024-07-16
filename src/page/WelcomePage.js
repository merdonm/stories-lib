import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen">
      <div className="bg-custom-image bg-cover bg-center h-full w-full text-white flex justify-center relative">
        <p className="absolute top-20 text-4xl font-bold ">
          Welcome to the QC Stories
        </p>
        <div className="flex absolute  bottom-20 flex-flex-col gap-10">
          <div className="flex flex-col justify-center items-center">
            <Link to={"/login"}>
              <button className="text-2xl px-5 py-2 bg-yellow-500 text-white rounded-lg ">LogIn</button>
            </Link>
            <p className="text-wrap ">Already have an Account</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link to={"/register"}>
              <button className="text-2xl px-5 py-2 bg-yellow-500 text-white rounded-lg ">Register Here</button>
            </Link>
            <p>New to the Qc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
