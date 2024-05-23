import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col border rounded-md border-white gap-6 p-8 md:p-12 h-[40vh] text-white ">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded-md bg-gray-800 outline-none overflow-auto"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-md bg-gray-800 outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="p-2 text-white bg-gray-600 w-[60%] rounded-md hover:bg-gray-900 transition-all duration-300">
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <div className="font-extralight">Don&apos;t have an account? <Link to={"/signup"} className="font-bold">Signup</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
