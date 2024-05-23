import React from "react";
import { FaInstagram, FaTwitter,FaYoutube,FaLinkedinIn, FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100">
      <div className="sm:text-[4vw] md:text-4xl py-6 font-bold p-2 capitalize text-white flex justify-center">
       One Stop shop to create posts at any platform!
      </div>
      <div className="flex gap-3 justify-center text-5xl">
        <FaInstagram className="text-white "    />
        <FaTwitter className="text-white "      />
        <FaYoutube className="text-white "      />
        <FaLinkedinIn className="text-white "   />
        <FaFacebook className="text-white "     />
      </div>
    </div>
  );
};

export default Home;
