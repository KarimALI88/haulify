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

const AdminLayout = () => {
    return (
        <div className="bg-[#EDEEF2] flex flex-col md:flex-row w-full   justify-between">
            <div className="w-full md:w-1/4">
                <AdminSideBar />
            </div>
            <Routes>
                <Route path="/products" element={<ViewProducts />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
                {/* =========================================================================== */}
                <Route path="/admins" element={<ViewAdmins />} />
                <Route path="/create-admin" element={<CreateAdmin />} />
                <Route path="/update-admin/:id" element={<UpdateAdmin />} />
                {/* =========================================================================== */}
                <Route path="/" element={<Dashboard />} />
                {/* =========================================================================== */}
                <Route path="/users" element={<ViewUsers />} />
                {/* =========================================================================== */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default AdminLayout;
