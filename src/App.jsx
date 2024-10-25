import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return 'light';
  });
  const [products, setProducts] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [alluser, setalluser] = useState([]);
  const [islogin, setislogin] = useState(localStorage.cn ?true :false);
  const [user, setUser] = useState(null);

  const getAlluser = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/users`,
    }).then((info) => {
      setalluser(info.data);
    });
  };

  const getUserDetails = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/users/${localStorage.cn}`,
    }).then((info) => setUser(info.data));
  };
  useEffect(() => {
    if(islogin){
    getUserDetails();
}}, [islogin]);

  useEffect(() => {
    getAlluser();
  },[]);
  const getproducts = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_LINK_API}/products`,
    }).then((info) => {
      setProducts(info.data);
      setproductdata(info.data);
    });
  };

  useEffect(() => {
    getproducts();
  }, [isChanged]);
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
              islogin={islogin}
              setislogin={setislogin}
              alluser={alluser}
              theme={theme}
              setTheme={setTheme}
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
              user={user}
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
            />
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
