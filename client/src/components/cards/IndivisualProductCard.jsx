import React from "react";
import { Rating } from "@mui/material";
import { FavoriteRounded, AddShoppingCartOutlined } from "@mui/icons-material";

const IndivisualProductCard = () => {
  return (
    <div className="w-72 flex flex-col gap-2 transition-all duration-300 ease-out cursor-pointer  ">
      <div className="relative rounded-md overflow-hidden group ">
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20231205/JltF/656ed471afa4cf41f5b4f8b2/-473Wx593H-462329145-green-MODEL.jpg"
          className="w-full h-80 object-cover transition-opacity duration-300 ease-out hover:opacity-50"
          alt="Product"
        />
        <div className="absolute invisible group-hover:visible top-2 right-2 z-10 flex flex-col gap-2  ">
          <div className="rounded-full w-10 h-10 bg-white flex items-center justify-center z-10 ">
            <FavoriteRounded className="text-red-500 z-10 " sx={{ fontSize: "20px" }} />
          </div>
          <div className="rounded-full w-10 h-10 bg-white flex items-center justify-center">
            <AddShoppingCartOutlined sx={{ color: "inherit", fontSize: "20px" }} />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 z-10 bg-white px-2 py-1 rounded-md flex items-center opacity-90">
          <Rating value={3.5} sx={{ fontSize: "14px" }} />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="text-lg font-semibold text-primary">Product Title</div>
        <div className="text-primary text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, animi!
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium">$1200</div>
          <div className="text-secondary-60 line-through">$1500</div>
          <div className="text-green-500 text-xs font-medium">20% Off</div>
        </div>
      </div>
    </div>
  );
};

export default IndivisualProductCard;
