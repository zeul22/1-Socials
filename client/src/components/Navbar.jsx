import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-blue-700 to-blue-300 items-center p-6 font-bold">
      <Link to={"/"}>1 SOCIALS</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Navbar;
