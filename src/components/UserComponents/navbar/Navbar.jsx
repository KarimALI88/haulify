import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Userprofile from "../userprofile/Userprofile";


const Header = ({ theme, setTheme, islogin,setislogin,user }) => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col justify-center gap-2 lg:pl-24 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] text-darkMode dark:text-[white] hover:bg-mainColor "
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/products"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] text-darkMode dark:text-[white] hover:bg-mainColor  "
      >
        Products
      </Typography>
      <Typography
        as={Link}
        to="/contact-us"
        variant="small"
        color="blue-gray"
        className="p-3 rounded-md font-[600] text-darkMode dark:text-[white] hover:bg-mainColor  "
      >
        Contact Us
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] max-w-full">
      <Navbar className="sticky top-0 z-10 h-max py-5 max-w-full rounded-none dark:bg-darkMode border-b border-t-0 border-r-0 border-l-0 border-b-[#adadad] shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-medium  text-darkMode dark:text-[white]"
          >
            Haulify
          </Typography>
          <div className="mx-auto hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center  gap-5">
              <Typography
                // as={Link}
                // to="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                {theme === "light" ? (
                  <MdDarkMode
                    size={25}
                    onClick={() => setTheme("dark")}
                    className=" rounded-md font-[600] hover:text-mainColor text-[#0B192C] dark:text-[white] "
                  />
                ) : (
                  <MdLightMode
                    size={25}
                    onClick={() => setTheme("light")}
                    className=" rounded-md font-[600] hover:text-mainColor text-[#0B192C] dark:text-[white] "
                  />
                )}
              </Typography>
              <Typography
                as={Link}
                to="/cart"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <IoIosCart
                  size={25}
                  className=" rounded-md font-[600] hover:text-mainColor text-[#0B192C] dark:text-[white] "
                />
              </Typography>
              <Typography
                as={Link}
                to="/wishlist"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <FaRegHeart
                  size={25}
                  className=" rounded-md font-[600] hover:text-mainColor text-[#0B192C] dark:text-[white] "
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
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
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
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="gradient"
              size="md"
              className=" bg-mainColor text-black font-[600]"
            >
              <Link to="/login">Sign in</Link>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
