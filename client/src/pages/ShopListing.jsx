import React, { useEffect, useState } from "react";
import IndivisualProductCard from '../components/cards/IndivisualProductCard';
import styled from "styled-components";
import { category, filter } from "../utils/data";
import { CircularProgress, Slider } from "@mui/material";
import {getAllProducts} from "./../api/index"
import Pagination from "../components/Pagination";

const ShopListing = () => {
  const [products , setProducts] = useState() ;
  const [currentPage , setCurrentPage] = useState(1) ;
  const [postPerPage , setPostPerPage] = useState(8) ;
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedSizes, setSelectedSizes] = useState(["S", "M", "L", "XL" , "XXL" , "64GB","128GB","256GB", "32GB" , "11 inch", "14 inch" , "13 inch" , "15 inch"]); // Default selected sizes
  const [selectedCategories, setSelectedCategories] = useState([
    "Men",
    "Women",
    "Kids",
    "Mobile",
    "Laptop"
  ]);


  const getFilteredProductsData = async () => {
    // setLoading(true);
    // Call the API function for filtered products
    await getAllProducts(
      `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}${
        selectedSizes.length > 0 ? `&sizes=${selectedSizes.join(",")}` : ""
      }${
        selectedCategories.length > 0
          ? `&categories=${selectedCategories.join(",")}`
          : ""
      }`
    ).then((res) => {
      setProducts(res.data);
      // setLoading(false);
    });
  };

  useEffect(() => {
    getFilteredProductsData();
  }, [priceRange, selectedSizes, selectedCategories]);

  // pagination --------------------------------------------------------------------------

  const lastPostIndex = currentPage* postPerPage ; 
  const firstPostIndex = lastPostIndex - postPerPage ;

  const ProductToShow = products?.slice(firstPostIndex,lastPostIndex) ;

    //   let page = [] ;

    // for(let i=1 ; i<=Math.ceil(totalProduct/productPerPage) ; i++){
    //     page.push(i) ;
    // }



  return (
      <div className="p-8 flex flex-col gap-8 bg-gray-100">
        {/* Filter details ------------------------------------------------ */}
        <div className="w-full">
          <div className="flex flex-col gap-4">
            {filter.map((filters) => (
              <div key={filters.name} className="flex gap-4 ">
                <div className="font-semibold text-lg inline mr-16">{filters.name} : </div>
    
                {/* Price Slider- ------------------------------------------- */}
                {filters.value === "price" ? (
                  <>
                    <Slider
                      aria-label="Price"
                      defaultValue={priceRange}
                      min={0}
                      max={50000}
                      valueLabelDisplay="auto"
                      marks={[
                        { value: 0, label: "₹0" },
                        { value: 50000, label: "₹50000" },
                      ]}
                      onChange={(e, newValue) => setPriceRange(newValue)}
                      className="max-w-[50%] inline-block"
                    />
                  </>
                ) : filters.value === "size" ? (
                  <div className="flex flex-wrap gap-2">
                    {filters.items.map((item) => (
                      <div
                        key={item}
                        className={`cursor-pointer border border-gray-300 text-gray-600 rounded-md px-3 py-1 ${
                          selectedSizes.includes(item)
                            ? "border-blue-500 font-bold text-blue-500 bg-blue-100"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedSizes((prevSizes) =>
                            prevSizes.includes(item)
                              ? prevSizes.filter((size) => size !== item)
                              : [...prevSizes, item]
                          )
                        }
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : filters.value === "category" ? (
                  <div className="flex flex-wrap gap-2">
                    {filters.items.map((item) => (
                      <div
                        key={item}
                        className={`cursor-pointer border border-gray-300 text-gray-600 rounded-md px-3 py-1 ${
                          selectedCategories.includes(item)
                            ? "border-blue-500 text-blue-500 font-bold bg-blue-100"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedCategories((prevCategories) =>
                            prevCategories.includes(item)
                              ? prevCategories.filter((category) => category !== item)
                              : [...prevCategories, item]
                          )
                        }
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
    
        {/* Product details ------------------------------------------------ */}
        <div className='flex flex-wrap gap-4 mt-8 items-center justify-center'>
          {ProductToShow?.map((p) => (
            <IndivisualProductCard key={p.id} product={p} />
          ))}

          <div className=" block w-full mx-auto text-center ">


          <Pagination
            totalProduct={products}
            productPerPage={postPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
            </div>
        </div>
      </div>
    );
};

export default ShopListing;
