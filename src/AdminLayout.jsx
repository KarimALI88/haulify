import React from "react";
import AdminSideBar from "./components/AdminComponents/sidebar/AdminSideBar";
import { Route, Routes } from "react-router-dom";
import ViewProducts from "./pages/AdminLayout/products/view/ViewProducts";
import CreateProduct from "./pages/AdminLayout/products/create/CreateProduct";
import UpdateProduct from "./pages/AdminLayout/products/update/UpdateProduct";
import ViewAdmins from "./pages/AdminLayout/admins/view/ViewAdmins";
import CreateAdmin from "./pages/AdminLayout/admins/create/CreateAdmin";
import UpdateAdmin from "./pages/AdminLayout/admins/update/UpdateAdmin";
import Dashboard from "./pages/AdminLayout/dashboard/Dashboard";
import ViewUsers from "./pages/AdminLayout/users/ViewUsers";
import NotFound from "./pages/UserLayout/not-found/NotFound";

const AdminLayout = ({
  products,
  productdata,
  setproductdata,
  setIsChanged,
  userInfo,
  adminInfo,
  setRefresh
}) => {
  return (
    <div className="bg-[#EDEEF2] flex flex-col md:flex-row w-full justify-between">
      <div className="w-full md:w-1/4">
        <AdminSideBar />
      </div>
      <Routes>
        <Route
          path="/products"
          element={
            <ViewProducts
              products={products}
              productdata={productdata}
              setproductdata={setproductdata}
              setIsChanged={setIsChanged}
            />
          }
        />
        <Route
          path="/create-product"
          element={<CreateProduct setIsChanged={setIsChanged} />}
        />
        <Route
          path="/update-product/:id"
          element={<UpdateProduct setIsChanged={setIsChanged} />}
        />
        {/* =========================================================================== */}
        <Route path="/admins" element={<ViewAdmins adminInfo={adminInfo} setRefresh={setRefresh}/>} />
        <Route
          path="/create-admin"
          element={<CreateAdmin adminInfo={adminInfo} setRefresh={setRefresh}/>}
        />
              setRefresh={setRefresh}
        <Route path="/update-admin/:id" element={<UpdateAdmin setRefresh={setRefresh}/>} />
        {/* =========================================================================== */}
        <Route path="/" element={<Dashboard />} />
        {/* =========================================================================== */}
        <Route path="/users" element={<ViewUsers userInfo={userInfo} />} />
        {/* =========================================================================== */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
