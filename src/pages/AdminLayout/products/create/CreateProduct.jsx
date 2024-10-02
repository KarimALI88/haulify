import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Textarea, Button } from "@material-tailwind/react";

const CreateProduct = () => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const handleFrom = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: `http://localhost:3000/products`,
            data: product,
        }).then(() => {
            navigate(-1);
        });
    };
    return (
        <div className="m-8 shadow-custom flex flex-col xl:flex-row justify-center items-center p-6 gap-12 bg-[#f1f1f1] rounded-2xl">
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
                                setProduct({ ...product, size: e.target.value.split(',') })
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

export default CreateProduct;
