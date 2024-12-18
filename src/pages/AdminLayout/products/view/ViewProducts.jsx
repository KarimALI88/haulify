import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import Product from "../../../../components/AdminComponents/product/Product";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ViewProducts = ({ products, productdata, setproductdata ,setIsChanged}) => {
    const [search, setSearch] = useState("");
    const getSearch = () => {        
        const searchedProducts = products.filter((product) =>
            product.title.includes(search)
        );
        setproductdata(searchedProducts);
    };
    useEffect(() => {
        getSearch();
    }, [search]);
    return (
        <div className="w-full flex md:flex-col flex-col m-2 ">
            <div className="h-[10vh] bg-white shadow-[1px_1px_6px_6px_rgba(0,0,0,0.1)] rounded-lg flex md:flex-row my-2 justify-evenly items-center ">
                <div className="flex items-center gap-2">
                    <IoIosPeople
                        size={40}
                        color="orange"
                        className="bg-gray-200 rounded-[10rem]"
                    />
                    <h1 className="font-bold">
                        Number of Products:{products.length}
                    </h1>
                </div>
                <div className="flex items-center gap-2">
                    <CiLogin
                        size={40}
                        color="green"
                        className="bg-gray-200 rounded-[10rem]"
                    />
                    <h1 className="font-bold">
                        Last created Admin: {products[products.length-1]?.title}
                    </h1>
                </div>
            </div>

            <div className="w-full">
                <main className=" overflow-auto rounded-lg flex flex-col gap-5 bg-white h-[85vh] overflow-y-auto p-6  ">
                    <div className="w-[100%] flex flex-col justify-center items-center gap-6 flex-wrap ">
                        <Link to={"/admin/create-product"}>
                            <Button className="bg-mainColor text-white " onClick={()=>setIsChanged(false)}>
                                Create New Product
                            </Button>
                        </Link>
                        <Input
                            label="Search"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center items-center">
                        {productdata.map(
                            ({ title, image, price, id }, check) => (
                                <Product
                                    key={check}
                                    id={id}
                                    title={title}
                                    image={image}
                                    price={price}
                                    setIsChanged={setIsChanged}
                                />
                            )
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ViewProducts;
