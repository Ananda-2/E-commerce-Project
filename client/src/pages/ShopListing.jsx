import React, { useEffect, useState } from "react";
import IndivisualProductCard from '../components/cards/IndivisualProductCard';
import styled from "styled-components";
import { category, filter } from "../utils/data";
import { CircularProgress, Slider } from "@mui/material";
import {getAllProducts} from "./../api/index"

const ShopListing = () => {
  const [products , setProducts] = useState() ;
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState(["S", "M", "L", "XL" , "XXL"]); // Default selected sizes
  const [selectedCategories, setSelectedCategories] = useState([
    "Men",
    "Women",
    "Kids",
    "Bags",
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



  return (
    <div className="p-8 overflow-y-hidden flex flex-col  gap-8 md:flex-row  md:overflow-y-scroll bg-gray-100">
      
      {/* Filter details ------------------------------------------------ */}
      <div className="w-full h-fit-content  p-4 md:h-full ">
        <div className="flex flex-col gap-4">
          {filter.map((filters) => (
            <div key={filters.name} className="flex flex-col gap-4">
              <div className="font-semibold text-lg">{filters.name}</div>

              {/* Price Slider- ------------------------------------------- */}

              {filters.value === "price" ? (
                <>
                  <Slider
                    aria-label="Price"
                    defaultValue={priceRange}
                    min={0}
                    max={1000}
                    valueLabelDisplay="auto"
                    marks={[
                      { value: 0, label: "$0" },
                      { value: 1000, label: "$1000" },
                    ]}
                    onChange={(e, newValue) => setPriceRange(newValue)}
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
          {
            products?.map((p) =>(
              <IndivisualProductCard product={p}/>
            ))
          }
      </div>

    </div>
  );
};

export default ShopListing;
