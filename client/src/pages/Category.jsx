import React from "react";
import CatergoryCard from "../components/cards/CatergoryCard";
import { category } from "../utils/data";

const Category = () => {
  return (
    <div className="w-full min-h-[900px]">
      <h1 className="text-center text-2xl font-bold text-green-900 mt-10 ">See All Category</h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {category.map((cat) => (
          <CatergoryCard props={cat} />
        ))}
      </div>
    </div>
  );
};

export default Category;
