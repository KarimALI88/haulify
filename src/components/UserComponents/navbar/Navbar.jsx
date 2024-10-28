import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Userprofile from "../userprofile/Userprofile";
import logo from "../../../assets/logo.png";

const Header = ({ theme, setTheme, islogin, setislogin, user, cartItems }) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6 gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] text-darkMode dark:text-[white] hover:bg-mainColor"
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/products"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] text-darkMode dark:text-[white] hover:bg-mainColor"
      >
        Products
      </Typography>
      <Typography
        as={Link}
        to="/contact-us"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] text-darkMode dark:text-[white] hover:bg-mainColor"
      >
        Contact Us
      </Typography>
    </ul>
  );

  const actionButtons = (
    <div className="flex items-center gap-4">
      <Typography variant="small" color="blue-gray" className="p-1 font-normal">
        {theme === "light" ? (
          <MdDarkMode
            size={25}
            onClick={() => setTheme("dark")}
            className="rounded-md hover:text-mainColor text-[#0B192C] dark:text-[white]"
          />
        ) : (
          <MdLightMode
            size={25}
            onClick={() => setTheme("light")}
            className="rounded-md hover:text-mainColor text-[#0B192C] dark:text-[white]"
          />
        )}
      </Typography>
      {islogin && (
        <Typography
          as={Link}
          to="/cart"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal relative"
        >
          <span className="bg-mainColor text-white p-1 rounded-full font-medium absolute bottom-4 right-0">
            {cartItems}
          </span>
          <IoIosCart
            size={25}
            className="rounded-md hover:text-mainColor text-[#0B192C] dark:text-[white]"
          />
        </Typography>
      )}
      <Typography
        as={Link}
        to="/wishlist"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <FaRegHeart
          size={25}
          className="rounded-md hover:text-mainColor text-[#0B192C] dark:text-[white]"
        />
      </Typography>
      {islogin ? (
        <Userprofile islogin={islogin} setislogin={setislogin} user={user} />
      ) : (
        <Button
          size="lg"
          className="hidden lg:inline-block bg-mainColor text-black font-[600]"
        >
          <Link to="/login">Sign in</Link>
        </Button>
      )}
    </div>
  );

  return (
    <div className="max-h-[768px] max-w-full">
      <Navbar className="sticky top-0 z-10 h-max py-5 max-w-full rounded-none dark:bg-darkMode border-b border-t-0 border-r-0 border-l-0 border-b-[#adadad] shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/"
            className="mr-4 cursor-pointer h-[60px] mb-3"
          >
            <img src={logo} alt="logo" className="mt-[-10px] block" />
          </Typography>
          <div className="mx-auto hidden lg:block">{navList}</div>
          <div className="hidden lg:flex">{actionButtons}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-4 mt-4">{actionButtons}</div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
