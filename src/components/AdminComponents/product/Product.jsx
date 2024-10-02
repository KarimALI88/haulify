import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import axios from "axios";
const Product = ({ title, image, price,id }) => {
    const deleteProduct = (id) => {
        const SwalButtons = Swal.mixin({
            customClass: {
                confirmButton:
                    "bg-green-700 text-white p-3 rounded-md text-[1.3rem] ml-5",
                cancelButton:
                    "bg-red-700 text-white p-3 rounded-md text-[1.3rem] ",
            },
            buttonsStyling: false,
        });
        SwalButtons.fire({
            title: "Do you want to delete this product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
        }).then((result) => {             
            if (result.isConfirmed) {
                axios({
                    method:"delete",
                    url:`http://localhost:3000/products/${id}`
                })
                SwalButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });

            } 
            else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                SwalButtons.fire({
                    title: "Cancelled",
                    text: "Your product has not been deleted 👍",
                    icon: "error",
                });
            }
        });
    };

    return (
        <Card className="mt-6 w-64 ">
            <CardHeader
                color="blue-gray"
                className="relative left-[-15px] h-40 w-64"
            >
                <img src={image} alt="card-image" className="object-fill" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 ">
                    {title}
                </Typography>
                <Typography>Price :{price} $</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex gap-5 justify-center">
                <Link to={`/admin/update-product/${id}`}>
                    <Button> Update</Button>
                </Link>
                <Button onClick={()=>deleteProduct(id)}>Delete</Button>
            </CardFooter>
        </Card>
    );
};

export default Product;
