import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquarePhone,
} from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen">
      <div className="flex flex-col justify-evenly items-center h-[50%]">
        <h1 className="font-semibold text-2xl">Contact Us</h1>
        <h1 className="font-bold text-5xl text-darkMode">Got a Question?</h1>
        <h1 className="text-gray-700">
          We'd like to talk more about what you need
        </h1>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center h-[100%]">
        <div className="flex flex-col items-center justify-evenly">
          <MdEmail size={50} color="black" />
          <p className="font-bold text-xl">Email</p>
          <p className="text-gray-700">haulify@email.com</p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <FaSquarePhone size={50} color="black" />
          <p className="font-bold text-xl">Phone</p>
          <p className="text-gray-700">+01159363432</p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
            <FaInstagramSquare size={50} color="black" />
          <p className="font-bold text-xl">Instagram</p>
          <p className="text-gray-700">haulify</p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <FaSquareFacebook size={50} color="black" />
          <p className="font-bold text-xl">Facebook</p>
          <p className="text-gray-700">Haulify</p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <FaSquareXTwitter size={50} color="black" />
          <p className="font-bold text-xl">X</p>
          <p className="text-gray-700">haulify</p>
        </div>
      </div>
    </div>
  );
}

export default Contact
