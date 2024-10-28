import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'

const Login = ({ alluser, setislogin }) => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [user, setuser] = useState({
    username: "",
    password: "", 
  });
  const [loading, setLoading] = useState(false)
  const [checkusername, setcheckusername] = useState(false);
  const [checkpassword, setcheckpassword] = useState(false);

  const reset = () => {
    setcheckpassword(false);
    setcheckusername(false);
  };

  const handleform = (e) => {
    e.preventDefault();
    setLoading(true)
    const loginUser = alluser.find(
      ({ email, password }) =>
        user.username === email && user.password === password
    );

    
    if (user.username === "") {
      setLoading(false)
      reset();
      setcheckusername(true);
      toast.error("email is required")
      return;
    } else if (user.password === "") {
      setLoading(false)
      reset();
      setcheckpassword(true);
      toast.error("password is required")
      return;
    } else {
      setLoading(false)
      const userinfo = {
        name: user.username,
        password: user.password,
      };
      if (loginUser) {
        if (loginUser.role === "admin") {
          navigate("/admin");
        }else{
          navigate("/");
        }
        localStorage.cn = loginUser.id;
        setislogin(true);
        toast.success("Login successfully")
      }else {
        toast.error("wrong inputs")
      }
  
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8 dark:bg-gray-900 mb-20">
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto px-8">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2 dark:text-white"
        >
          Sign In
        </Typography>
        <Typography className="mb-16 text-gray-600 dark:text-gray-400 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>
        <form onSubmit={handleform} className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </Typography>
            </label>
            <Input
              onChange={(e) => setuser({ ...user, username: e.target.value })}
              error={checkusername}
              value={user.username}
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 dark:border-t-gray-600 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </Typography>
            </label>
            <Input
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              error={checkpassword}
              value={user.password}
              size="lg"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 dark:border-t-gray-600 dark:bg-gray-800 dark:text-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 dark:text-white" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 dark:text-white" />
                  )}
                </i>
              }
            />
          </div>
          <Button
            type="submit"
            color="gray"
            size="lg"
            className="mt-6 bg-deep-orange-600 dark:bg-deep-orange-500"
            fullWidth
          >
            {loading ? "loading...." : "Sign In"}
          </Button>

          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal dark:text-gray-300"
          >
            Not registered?{" "}
            <a
              onClick={() => navigate("/signup")}
              className="font-medium text-gray-900 dark:text-white cursor-pointer"
            >
              Create account
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default Login;
