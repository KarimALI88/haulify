import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Textarea, Button } from "@material-tailwind/react";
const UpdateProduct = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        offers: "",
        rate: 0,
        image: "",
        size: [],
        count: 0,
    });
    const navigate = useNavigate();
    const myproduct = useParams().id;
    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/products/${myproduct}`,
        }).then(({ data }) => {
            setProduct(data);
        });
    }, []);
    const handleFrom = (e) => {
        e.preventDefault();
        console.log(product);
        
        axios({
            method: "put",
            url: `http://localhost:3000/products/${product.id}`,
            data: product,
        }).then(() => {
            navigate(-1);
        });
    };
    return (
        <div className="m-8 shadow-custom flex flex-col xl:flex-row justify-center items-center p-6 gap-12 bg-[#f1f1f1] rounded-2xl">
            <div className="w-full lg:w-1/2 flex justify-center  ">
                <img
                    src={product?.image}
                    alt=""
                    className="rounded-3xl object-contain xl:w-[100%] xl:h-[100%] "
                />
            </div>
            <form method="post" name="form" onSubmit={(e) => handleFrom(e)}>
                <div className="flex flex-wrap gap-y-8 justify-between">
                    <div className="w-[100%]">
                        <Input
                            label="Title"
                            value={product?.title}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    title: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[100%]">
                        <Input
                            label="Rate"
                            value={product?.rate}
                            type="number"
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    rate: parseInt(e.target.value),
                                })
                            }
                        />
                    </div>
                    <div className="md:w-[48%] w-[100%]">
                        <Input
                            label="Price"
                            value={product?.price}
                            type="number"
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    price: parseInt(e.target.value),
                                })
                            }
                        />
                    </div>
                    <div className="md:w-[48%] w-[100%]">
                        <Input
                            label="Count"
                            value={product?.count}
                            type="number"
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    count: parseInt(e.target.value),
                                })
                            }
                        />
                    </div>

                    <div className="w-[100%]">
                        <Textarea
                            label="Description"
                            value={product?.description}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-[100%]">
                        <Input
                            label="Image"
                            value={product?.image}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    image: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="md:w-[48%] w-[100%]">
                        <Input
                            label="Offers"
                            value={product?.offers}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    offers: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="md:w-[48%] w-[100%]">
                        <Input
                            label="Size"
                            value={product?.size}
                            onChange={(e) =>
                                setProduct({ ...product, size: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div  className="flex justify-center mt-8">

                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
