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

const CreateProduct = ({setIsChanged}) => {
    const [size, setSize] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        rate: 5,
        cateigory: "",
        price: 0,
        count: 0,
        description: "",
        image: "",
        offers: "",
        size: [],
    });
    const navigate = useNavigate();
    const handleCheckboxChange = (value) => {
        setSize((prevSize) => {
            if (prevSize.includes(value)) {
                return prevSize.filter((item) => item !== value);
            } else {
                return [...prevSize, value];
            }
        });
    };
    const handleFrom = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: `http://localhost:3000/products`,
            data: { ...product, size: size },
        }).then(() => {
            setIsChanged(true)
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
                        <Select
                            label="Cateigory"
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
                    <div className="md:w-[48%] w-[100%]">
                        <Input
                            label="Price"
                            value={product?.price}
                            type="number"
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    price: isNaN(e.target.value)||e.target.value=='' ? e.target.value : parseInt(e.target.value),
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
                                    count: isNaN(e.target.value)||e.target.value=='' ? e.target.value : parseInt(e.target.value),
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
                            onChange={() => {
                                handleCheckboxChange("small");
                            }}
                        />
                        <Checkbox
                            label="Medium"
                            value={"medium"}
                            onChange={() => {
                                handleCheckboxChange("medium");
                            }}
                        />
                        <Checkbox
                            label="Large"
                            value={"large"}
                            onChange={() => {
                                handleCheckboxChange("large");
                            }}
                        />
                        <Checkbox
                            label="X-large"
                            value={"x-large"}
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

export default CreateProduct;
