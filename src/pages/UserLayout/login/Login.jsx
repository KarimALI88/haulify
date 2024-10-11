import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const [checkusername, setcheckusername] = useState(false);
  const [checkpassword, setcheckpassword] = useState(false);

  const reset = () => {
    setcheckpassword(false);
    setcheckusername(false);
  };

  const handleform = (e) => {
    e.preventDefault();
    if (user.username === "") {
      reset();
      setcheckusername(true);
    } else if (user.password === "") {
      reset();
      setcheckpassword(true);
    } else {
      const userinfo = {
        name: user.username,
        password: user.password,
      };
      axios({
        method: "post",
        url: `http://localhost:3000/users`,
        data: userinfo,
      }).then(() => {
        setuser({
          username: "",
          password: "",
        });
      });
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8 dark:bg-gray-900">
      <div>
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
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 dark:border-t-gray-600"
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
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 dark:border-t-gray-600"
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
            sign in
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
