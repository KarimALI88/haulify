import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Typography,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useCountries } from "use-react-countries";

const CreateAdmin = () => {
  const { countries } = useCountries();
  const [checkUserName, setCheckUserName] = useState(false);
  const [checkAdminName, setCheckAdminName] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkGender, setCheckGender] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkConfirmPaswword, setCheckConfirmPassword] = useState(false);
  const [checkCountry, setCheckCountry] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);
  const [admin, setAdmin] = useState({
    username: "",
    name: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    country: "",
    phone: "",
  });

  const reset = () => {
    setCheckUserName(false);
    setCheckEmail(false);
    setCheckGender(false);
    setCheckPassword(false);
    setCheckConfirmPassword(false);
    setCheckCountry(false);
    setCheckPhone(false);
    setCheckAdminName(false);
  };

  // _____________________________________________________________________

  const check = (label) => {
    label(true);
  };

  // _____________________________________________________________________

  const handleForm = () => {
    if (admin.name == "") {
      reset();
      check(setCheckAdminName);
    }
    if (admin.username == "") {
      reset();
      check(setCheckUserName);
    } else if (!admin.email.includes("@haulify.eg")) {
      reset();
      check(setCheckEmail);
    } else if (admin.gender.checked == false) {
      reset();
      check(setCheckGender);
    } else if (admin.password == "" || admin.password.length < 8) {
      reset();
      check(setCheckPassword);
    } else if (admin.confirmPassword !== admin.password) {
      reset();
      check(setCheckConfirmPassword);
    } else if (admin.country == "") {
      reset();
      check(setCheckCountry);
    } else if (admin.phone == "") {
      reset();
      check(setCheckPhone);
    } else {
      const { confirmPassword, ...dataToSend } = admin;

      axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: {
          ...dataToSend,
          role: "admin",
        },
      });
      backToAdmins();
    }
  };

  // _____________________________________________________________________

  const navigate = useNavigate();
  const backToAdmins = () => {
    navigate(`/admin/admins`);
  };

  // _____________________________________________________________________

  return (
    <section className="px-8 py-20 container mx-auto">
      <Typography variant="h5" color="blue-gray">
        Basic Information
      </Typography>

      <div className="flex flex-col mt-8">
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Admin Name
            </Typography>
            <Input
              size="lg"
              placeholder="Emma Watson"
              labelProps={{
                className: "hidden",
              }}
              value={admin.name}
              error={checkAdminName}
              onChange={(e) =>
                setAdmin({
                  ...admin,
                  name: e.target.value,
                })
              }
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="emmawatson02"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={admin.username}
              error={checkUserName}
              onChange={(e) =>
                setAdmin({
                  ...admin,
                  username: e.target.value,
                })
              }
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
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="emma@mail.com"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={admin.email}
              error={checkEmail}
              onChange={(e) =>
                setAdmin({
                  ...admin,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Gender
            </Typography>

            <Select
              size="lg"
              labelProps={{
                className: "hidden",
              }}
              error={checkGender}
              value={admin.gender}
              onChange={(e) => {
                setAdmin({
                  ...admin,
                  gender: e,
                });
              }}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography color="blue-gray" className="mb-2">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={admin.password}
              error={checkPassword}
              onChange={(e) =>
                setAdmin({
                  ...admin,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography variant="sm" color="blue-gray" className="mb-2">
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={admin.confirmPassword}
              error={checkConfirmPaswword}
              onChange={(e) =>
                setAdmin({
                  ...admin,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Select
              size="lg"
              label="Select Country"
              selected={(element) =>
                element &&
                React.cloneElement(element, {
                  disabled: true,
                  className:
                    "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                })
              }
              value={admin.country}
              onChange={(e) => {
                setAdmin({
                  ...admin,
                  country: e,
                });
              }}
            >
              {countries.map(({ name, flags }) => (
                <Option
                  key={name}
                  value={name}
                  className="flex items-center gap-2"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  {name}
                </Option>
              ))}
            </Select>
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
              placeholder="+123 0123 456 789"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={admin.phone}
              error={checkPhone}
              onChange={(e) =>
                setAdmin({
                  ...admin,
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            variant="gradient"
            color="orange"
            className="w-[10rem] mx-auto mt-10"
            onClick={() => handleForm()}
          >
            Create
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CreateAdmin;