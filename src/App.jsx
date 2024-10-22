import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [products, setProducts] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [adminInfo, setAdminInfo] = useState([]);

  const getproducts = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/products`,
    }).then((info) => {
      setProducts(info.data);
      setproductdata(info.data);
    });
  };

  const getAllUsersAndAdmins = (role) => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/users`,
    }).then((data) => {
      const filteredList = data.data
        .filter((user) => user.role === role)
        .map((user) => user);

      if (role === "admin") {
        setAdminInfo(filteredList);
      } else if (role === "user") {
        setUserInfo(filteredList);
      }
    });
  };

  useEffect(() => {
    getproducts();
  }, [isChanged]);
  useEffect(() => {
    getAllUsersAndAdmins("user");
  });
  useEffect(() => {
    getAllUsersAndAdmins("admin");
  });
  useEffect(() => {
    localStorage.theme = theme;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <UserLayout
              theme={theme}
              setTheme={setTheme}
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
            />
          }
        />
        <Route
          path="/admin/*"
          element={
            <AdminLayout
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
              setIsChanged={setIsChanged}
              userInfo={userInfo}
              adminInfo={adminInfo}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
