import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col border rounded-md border-white gap-6 p-8 md:p-12 h-[40vh] text-white ">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 rounded-md bg-gray-800 outline-none overflow-auto"
            />
          </div>
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
              Submit
            </button>
          </div>
          <div className="flex justify-center">
            <div className="font-extralight">
              Already have an account?{" "}
              <Link to={"/login"} className="font-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
