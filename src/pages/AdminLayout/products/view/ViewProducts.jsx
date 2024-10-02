import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../../../components/AdminComponents/product/Product";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ViewProducts = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchProducts, setSearchProducts] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/products",
        }).then(({ data }) => setProducts(data));
    }, []);
    const getSearch = () => {
        products.map(({ title ,id}) => {
            if (title.includes(search)&&!searchProducts.includes(title)&&search!="") {
                console.log(title);
                
                setSearchProducts([...searchProducts, title,id]);
            }
        });
    };
    useEffect(() => {
        getSearch();
        console.log(searchProducts);
        
    }, [search]);
    return (
        <div className="flex flex-col justify-center items-center gap-12">
            <Link to={"/admin/create-product"}>
                <Button className="bg-green-600 text-white">
                    Create New Product
                </Button>
            </Link>
            <Input
                label="Search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-wrap justify-center items-center gap-5">
                {products.map(({ title, image, price, id }, check) => (
                    <Product
                        key={check}
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ViewProducts;
