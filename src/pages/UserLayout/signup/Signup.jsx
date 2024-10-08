import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";

const Signup = () => {
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    location: "",
    phoneNumber: "",
  });

  const [check, setcheck] = useState({
    firstName: false,
    lastName: false,
    gender: false,
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
    location: false,
    phoneNumber: false,
  });

  const handleForm = (e) => {
    e.preventDefault();

    const error = {
      firstName: !Data.firstName,
      lastName: !Data.lastName,
      gender: !Data.gender,
      email: !Data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Data.email),
      confirmEmail: Data.confirmEmail !== Data.email,
      password: !Data.password,
      confirmPassword: Data.confirmPassword !== Data.password,
      location: !Data.location,
      phoneNumber: !Data.phoneNumber,
    };

    setcheck(error);

    if (
      !error.firstName &&
      !error.lastName &&
      !error.gender &&
      !error.email &&
      !error.confirmEmail &&
      !error.password &&
      !error.confirmPassword &&
      !error.location &&
      !error.phoneNumber
    ) {
      const userInfo = {
        firstName: Data.firstName,
        lastName: Data.lastName,
        gender: Data.gender,
        email: Data.email,
        password: Data.password,
        location: Data.location,
        phoneNumber: Data.phoneNumber,
      };

      axios.post("http://localhost:3000/users", userInfo).then(() => {
        setData({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
          location: "",
          phoneNumber: "",
        });
      });
    }
  };

  return (
    <section className="container mx-auto flex flex-col md:flex-row py-20">
      <div className="w-[50%] flex justify-center items-center mb-10 md:mb-0">
        <div className="h-96 bg-gray-100 flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/people-shopping-with-credit-card_53876-66144.jpg?t=st=1727967684~exp=1727971284~hmac=f83441b4e4d0f07d4708427f5a2ea449e0145a58d36ab5ce6866c6bffcd2eada&w=826"
            alt="Signup Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="w-full md:w-2/3 px-8 ml-4">
        
        <Typography variant="h3" color="blue-gray" className="font-[900] mb-4">
          Sign Up
        </Typography>
        <Typography
          variant="small"
          className="text-gray-600 font-normal mb-16 text-[18px]"
        >
          Create your account by filling out the information below.
        </Typography>
        <form onSubmit={handleForm} className="flex flex-col">
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                First Name
              </Typography>
              <Input
                size="lg"
                value={Data.firstName}
                onChange={(e) =>
                  setData({ ...Data, firstName: e.target.value })
                }
                error={check.firstName}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.firstName ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Last Name
              </Typography>
              <Input
                size="lg"
                value={Data.lastName}
                onChange={(e) => setData({ ...Data, lastName: e.target.value })}
                error={check.lastName}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.lastName ? "border-red-500" : ""
                }`}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="mb-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              I'm
            </Typography>
            <Select
              size="lg"
              value={Data.gender}
              onChange={(value) => setData({ ...Data, gender: value })}
              error={check.gender}
              className={`border-t-blue-gray-200 aria-[expanded=true]:border-t-primary ${
                check.gender ? "border-red-500" : ""
              }`}
            >
              <Option value="" disabled>
                Select Gender
              </Option>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </div>

          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Email
              </Typography>
              <Input
                size="lg"
                value={Data.email}
                onChange={(e) => setData({ ...Data, email: e.target.value })}
                error={check.email}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.email ? "border-red-500" : ""
                }`}
              />
            </div>
          </div>

          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Password
              </Typography>
              <Input
                size="lg"
                type="password"
                value={Data.password}
                onChange={(e) => setData({ ...Data, password: e.target.value })}
                error={check.password}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.password ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Confirm Password
              </Typography>
              <Input
                size="lg"
                type="password"
                value={Data.confirmPassword}
                onChange={(e) =>
                  setData({ ...Data, confirmPassword: e.target.value })
                }
                error={check.confirmPassword}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.confirmPassword ? "border-red-500" : ""
                }`}
              />
            </div>
          </div>

          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Location
              </Typography>
              <Input
                size="lg"
                value={Data.location}
                onChange={(e) => setData({ ...Data, location: e.target.value })}
                error={check.location}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.location ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Phone Number
              </Typography>
              <Input
                size="lg"
                value={Data.phoneNumber}
                onChange={(e) =>
                  setData({ ...Data, phoneNumber: e.target.value })
                }
                error={check.phoneNumber}
                className={`w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 ${
                  check.phoneNumber ? "border-red-500" : ""
                }`}
              />
            </div>
          </div>

          <Button type="submit"  fullWidth className="mt-6 bg-deep-orange-700">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
























