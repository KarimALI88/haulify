import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Input,
    Textarea,
    Button,
    Checkbox,
    Select,
    Option,
} from "@material-tailwind/react";
const UpdateProduct = () => {
    const [size, setSize] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        rate: 0,
        cateigory: "",
        price: 0,
        count: 0,
        description: "",
        image: "",
        offers: "",
        size: [],
    });
    const navigate = useNavigate();
    const myproduct = useParams().id;
    const handleCheckboxChange = (value) => {
        setSize((prevSize) => {
            if (prevSize.includes(value)) {
                return prevSize.filter((item) => item !== value);
            } else {
                return [...prevSize, value];
            }
        });
    };
    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/products/${myproduct}`,
        }).then(({ data }) => {
            setProduct(data);
            setSize(data.size);
            
        });
    }, []);
    const handleFrom = (e) => {
        e.preventDefault();
        axios({
            method: "put",
            url: `http://localhost:3000/products/${product.id}`,
            data: {...product,size:size},
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
                        <Select
                            label="Cateigory"
                            value={product.cateigory}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    cateigory: e,
                                })
                            }                        >
                            <Option value="men">Men</Option>
                            <Option value="women">Women</Option>
                            <Option value="children">Children</Option>
                        </Select>
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
                    <div className="md:w-[35%] w-[100%]">
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
                    <div className="md:w-[60%] w-[100%]">
                        <Checkbox
                            label="Small"
                            value={"small"}
                            checked={size.includes('small')}
                            onChange={() => {
                                handleCheckboxChange("small");
                            }}
                        />
                        <Checkbox
                            label="Medium"
                            value={"medium"}
                            checked={size.includes('medium')}

                            onChange={() => {
                                handleCheckboxChange("medium");
                            }}
                        />
                        <Checkbox
                            label="Large"
                            value={"large"}
                            checked={size.includes('large')}

                            onChange={() => {
                                handleCheckboxChange("large");
                            }}
                        />
                        <Checkbox
                            label="X-large"
                            value={"x-large"}
                            checked={size.includes('x-large')}
                            onChange={() => {
                                handleCheckboxChange("x-large");
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
