import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Input,
  Typography,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "use-react-countries";

const UpdateAdmin = () => {
  const { countries } = useCountries();
  const { id } = useParams();
  const [adminData, setAdminData] = useState(null);
  const getTheAdmin = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/users/${id}`,
    }).then((data) => {
      setAdminData(data.data);
    });
  };

  // _____________________________________________________________________

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value, field) => {
    setAdminData((prevData) => ({ ...prevData, [field]: value }));
  };

  // _____________________________________________________________________

  const navigate = useNavigate();
  const handleSave = () => {
    axios({
      method: "put",
      url: `http://localhost:3000/users/${id}`,
      data: adminData,
    });
    navigate("/admin/admins");
  };

  // _____________________________________________________________________

  
  useEffect(() => {
    getTheAdmin();
  }, [id]);
if (!adminData) return <p>Loading..</p>
  // _____________________________________________________________________

  return (
    <section className="w-full m-5 bg-white rounded-lg p-5 shadow-[1px_1px_6px_6px_rgba(0,0,0,0.3)] ">
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
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={adminData.name}
              name="name"
              onChange={handleInputChange}
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
              value={adminData.username}
              name="username"
              onChange={handleInputChange}
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
              value={adminData.email}
              name="email"
              onChange={handleInputChange}
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
              value={adminData.gender}
              onChange={(value) => handleSelectChange(value, "gender")}
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
              value={adminData.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <Typography color="blue-gray" className="mb-2">
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
              value={adminData.password}
              name="confirmpassword"
              onChange={handleInputChange}
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
              value={adminData.country}
              onChange={(value) => handleSelectChange(value, "country")}
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
              value={adminData.phone}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Button
            variant="gradient"
            color="orange"
            className="w-[10rem] mx-auto mt-10 text-md"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpdateAdmin;
