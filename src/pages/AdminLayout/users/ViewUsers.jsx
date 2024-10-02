import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Typography, Card, Input } from "@material-tailwind/react";
import { IoIosPeople } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaSearch } from "react-icons/fa"; 
import { CiLogin } from "react-icons/ci";
import Swal from "sweetalert2";
import AdminSideBar from "../../../components/AdminComponents/sidebar/AdminSideBar";

const ViewUsers = () => {
  const [userInfo, setUserInfo] = useState([]);
  const getAllUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((data) => {
      const userList = data.data
        .filter((user) => user.role === "user")
        .map((user) => user);
      setUserInfo(userList);
    });
  };

  // _____________________________________________________________________

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF8F00",
      cancelButtonColor: "#3C3D37",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonColor: "#FF8F00",
        });
        userInfo.find((user) => {
          if (user.id == id) {
            axios({
              method: "delete",
              url: `http://localhost:3000/users/${user.id}`,
            });
          }
        });
      }
    });
  };

  // _____________________________________________________________________

  const [matchedUsers, setMatchedUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const searchUser = (input) => {
    const matched = userInfo.filter((user) =>
      user.username.toLowerCase().includes(input.toLowerCase())
    );
    setMatchedUsers(matched);
  };

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    searchUser(inputValue);
  };

  // _____________________________________________________________________

  useEffect(() => {
    getAllUsers();
  });

  // _____________________________________________________________________

  return (
    <div className="bg-[#EDEEF2] flex flex-col md:flex-row w-full h-screen">
      <div className="w-full md:w-1/4">
        <AdminSideBar />
      </div>

      <div className="w-full flex md:flex-col flex-col">
        <div className=" w-[97%] h-[10%] bg-white mt-5 ml-5 rounded-lg flex md:flex-row  justify-evenly items-center">
          <div className="flex items-center gap-2">
            <IoIosPeople
              size={40}
              color="orange"
              className="bg-gray-200 rounded-[10rem]"
            />
            <h1 className="font-bold">Number of Users: {userInfo.length}</h1>
          </div>
          <div className="flex items-center gap-2">
            <CiLogin
              size={40}
              color="green"
              className="bg-gray-200 rounded-[10rem]"
            />
            <h1 className="font-bold">
              Last registered User:
              {userInfo.length > 0 ? (
                <>{" " + userInfo[userInfo.length - 1].username}</>
              ) : (
                "No users available"
              )}
            </h1>
          </div>
        </div>

        <div className="w-full">
          <main className="m-5 overflow-auto shadow-lg">
            <section className="w-full bg-white rounded-lg shadow-2xl">
              <div className="p-6 flex justify-between items-center shadow-lg">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Users
                </Typography>
                <div className="relative flex w-full max-w-[24rem]">
                  <Input
                    label="Search for an user"
                    className="pr-20"
                    icon={
                      <FaSearch
                        className="cursor-pointer"
                        onClick={() => searchUser(searchInput)}
                      />
                    }
                    containerProps={{
                      className: "min-w-0 shadow-lg rounded-lg",
                    }}
                    value={searchInput}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <Card className="h-[500px] w-full overflow-y-auto border border-gray-300 px-6">
                <table className="w-full min-w-[10rem] table-auto text-left cursor-pointer">
                  <thead>
                    <tr>
                      <th className="text-left p-4 pl-0">Name</th>
                      <th className="text-left p-4 pl-0">Username</th>
                      <th className="text-left p-4 pl-0">Email</th>
                      <th className="text-left p-4 pl-0">Gender</th>
                      <th className="text-left p-4 pl-0">Phone</th>
                      <th className="text-left p-4 pl-0">Country</th>
                      <th className="text-left p-4 pl-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(searchInput ? matchedUsers : userInfo).map(
                      (user, index) => {
                        const isLast = index === userInfo.length - 1;
                        const classes = isLast
                          ? "py-4"
                          : "py-4 border-b border-gray-300";

                        return (
                          <tr key={user.id} className="hover:bg-gray-50">
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {user.name}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {user.username}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                className="font-normal text-gray-600"
                              >
                                {user.email}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                className="font-normal text-gray-600"
                              >
                                {user.gender}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                className="font-normal text-gray-600"
                              >
                                {user.phone}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                className="font-normal text-gray-600"
                              >
                                {user.country}
                              </Typography>
                            </td>

                            <td className={classes}>
                              <MdDeleteForever
                                size={30}
                                color="red"
                                className="bg-gray-200 rounded-[10rem]"
                                onClick={() => deleteUser(user.id)}
                              />
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
