import { React, useEffect, useState } from "react";
import axios from "axios";
import { Typography, Card, Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import Swal from "sweetalert2";

const ViewAdmins = () => {
  const [adminInfo, setAdminInfo] = useState([]);
  const getAllAdmins = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((data) => {
      const adminList = data.data
        .filter((user) => user.role === "admin")
        .map((user) => user);
      setAdminInfo(adminList);
    });
  };
  // _____________________________________________________________________

  const deleteAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this admin!",
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
        adminInfo.find((admin) => {
          if (admin.id == id) {
            axios({
              method: "delete",
              url: `http://localhost:3000/users/${admin.id}`,
            });
          }
        });
      }
    });
  };

  // _____________________________________________________________________

  const navigate = useNavigate();
  const editAdmin = (id) => {
    const adminDetails = adminInfo.find((admin) => admin.id === id);
    if (adminDetails) {
      navigate(`/admin/update-admin/${id}`);          
    }
  };

  // _____________________________________________________________________

  const [matchedAdmins, setMatchedAdmins] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const searchAdmin = (input) => {
    const matched = adminInfo.filter((admin) =>
      admin.username.toLowerCase().includes(input.toLowerCase())
    );
    setMatchedAdmins(matched);
  };
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    searchAdmin(inputValue);
  };

  // _____________________________________________________________________

  useEffect(() => {
    getAllAdmins();
  });

  // _____________________________________________________________________
  return (
    <div className="w-full flex md:flex-col flex-col m-2">
      <div className="h-[10%] bg-white shadow-[1px_1px_6px_6px_rgba(0,0,0,0.1)] rounded-lg flex md:flex-row my-2 justify-evenly items-center ">
        <div className="flex items-center gap-2">
          <IoIosPeople
            size={40}
            color="orange"
            className="bg-gray-200 rounded-[10rem]"
          />
          <h1 className="font-bold">Number of Admins: {adminInfo.length}</h1>
        </div>

        <div className="flex items-center gap-2">
          <CiLogin
            size={40}
            color="green"
            className="bg-gray-200 rounded-[10rem]"
          />
          <h1 className="font-bold">
            Last created Admin:
            {adminInfo.length > 0 ? (
              <>{" " + adminInfo[adminInfo.length - 1].username}</>
            ) : (
              "No admins available"
            )}
          </h1>
        </div>
      </div>

      <div className="w-full">
        <main className=" overflow-auto rounded-lg">
          <section className="w-full bg-white rounded-lg">
            <div className="p-6 flex justify-between items-center">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Admins
              </Typography>
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  label="Search for an admin"
                  className="pr-20"
                  value={searchInput}
                  onChange={handleSearch}
                  containerProps={{
                    className: "min-w-0 shadow-lg rounded-lg",
                  }}
                />
              </div>
              <Link to={"/admin/create-admin"}>
                <Button
                  className="bg-mainColor"
                >
                  Create new admin
                </Button>
              </Link>
            </div>

            <Card className="h-[500px] w-full overflow-y-auto border border-gray-300 px-6">
              <table className="w-full min-w-[10rem] table-auto text-left cursor-pointer">
                <thead>
                  <tr>
                    <th className="text-left p-4 pl-0">Name</th>
                    <th className="text-left p-4 pl-0">Email</th>
                    <th className="text-left p-4 pl-0">Gender</th>
                    <th className="text-left p-4 pl-0">Phone</th>
                    <th className="text-left p-4 pl-0">Country</th>
                    <th className="text-left p-4 pl-0" colSpan="2">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {(searchInput ? matchedAdmins : adminInfo).map(
                    (admin, index) => {
                      const isLast = index === adminInfo.length - 1;
                      const classes = isLast
                        ? "py-4"
                        : "py-4 border-b border-gray-300";
                      return (
                        <tr key={admin.id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {admin.username}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {admin.email}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {admin.gender}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {admin.phone}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {admin.country}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <MdOutlineModeEdit
                              color="darkMode"
                              size={25}
                              onClick={() => editAdmin(admin.id)}
                            />
                          </td>
                          <td>
                            <MdDeleteForever
                              size={30}
                              color="red"
                              className="bg-gray-200 rounded-[10rem]"
                              onClick={() => deleteAdmin(admin.id)}
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
  );
};

export default ViewAdmins;
