import React from 'react'
import { FaFacebook  } from "react-icons/fa";
import { FaSquareInstagram,FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full dark:bg-darkMode bg-white p-8 border-t border-b-0 border-r-0 border-l-0 border-t-[#adadad]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 dark:bg-darkMode bg-white text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] hover:bg-mainColor  text-darkMode dark:text-[white]"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/products"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] hover:bg-mainColor  text-darkMode dark:text-[white]"
      >
        Products
      </Typography>
      <Typography
        as={Link}
        to="/contact-us"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] hover:bg-mainColor  text-darkMode dark:text-[white]"
      >
        Contact Us
      </Typography>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50 " />
      <div className="flex justify-center items-center gap-10">
      <FaFacebook size={25} className='text-darkMode dark:text-[white]'/>
      <FaSquareInstagram size={25} className='text-darkMode dark:text-[white]'/>
      <FaSquareXTwitter size={25} className='text-darkMode dark:text-[white]'/>
      </div>
    </footer>
  )
}

export default Footer
