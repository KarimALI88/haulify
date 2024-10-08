import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [goEdit, setGoEdit] = useState(true);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );
  const fileInputRef = useRef(null);
  const getUserData = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((res) => {
      res.data.map((user) =>
        // user.id === id of logged user ?
        setUserInfo(user)
      );
    });
  };

  const handleChange = (e, toBeChanged) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [toBeChanged]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const saveChanges = () => {
    setGoEdit(true);
    axios({
      method: "put",
      url: `http://localhost:3000/users/${userInfo.id}`,
      data: userInfo,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-100 shadow-md rounded-lg p-8 max-w-[40rem] w-full">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-bold mb-6">User Profile</h2>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4"
            onClick={triggerFileInput}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
            value={userInfo.name || ""}
            onChange={(e) => handleChange(e, "name")}
            disabled={goEdit}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={userInfo.email || ""}
            onChange={(e) => handleChange(e, "email")}
            disabled={goEdit}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={userInfo.password || ""}
            onChange={(e) => handleChange(e, "password")}
            disabled={goEdit}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            id="gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={userInfo.gender || ""}
            onChange={(e) => handleChange(e, "gender")}
            disabled={goEdit}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex items-center justify-evenly">
          <button
            onClick={() => setGoEdit(false)}
            className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            onClick={saveChanges}
            className="bg-mainColor hover:bg-[#eba062] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
