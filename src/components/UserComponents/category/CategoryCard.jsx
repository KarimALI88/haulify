import React from "react";

const CategoryCard = ({ name, image }) => {
  return (
    <div
      className="p-5 rounded-xl my-5 h-[250px]"
      style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }}
    >
      <h3 className="font-[700] text-[36px]">{name}</h3>
    </div>
  );
};

export default CategoryCard;
