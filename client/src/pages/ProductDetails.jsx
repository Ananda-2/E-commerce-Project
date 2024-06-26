import {React,useState} from "react";
import { Rating } from "@mui/material";

const sizes = ['SM','M','L'] ;

export default function ProductDetails(){
    const [selected,setSelected] = useState(null);

    return (
        <div className="flex flex-col md:flex-row min-h-screen m-auto ">
            <div className=" flex-1 justify-center items-center m-auto text-center ">
                <img src="data:image/jpeg;base64,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" alt="" srcset="" 
                className="m-auto cover items-center justify-center mb-16 rounded-md " height={300} width={300}/>
            </div>
            <div className="flex-1 items-center justify-center text-left px-10 ">
                <h1 className="mt-24 font-bold text-gray-700 text-2xl ">Product Name</h1>
                <h2 className="text-base my-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias aliquid similique reiciendis repellendus eos quaerat nesciunt? Sit, ipsam odit.</h2>
                 <Rating value={3.5} sx={{ fontSize: "24px" }} />

                 <div className="flex items-center gap-2">
                    <div className="text-lg font-medium">$1200</div>
                    <div className="text-secondary-60 line-through text-gray-500 p-5 ">$1500</div>
                    <div className="text-green-500 text-xs font-medium">20% Off</div>
                </div>

                {
                    sizes.map((size)=>(
                        <span className={`border border-blue-400  rounded-full py-1 mr-3 cursor-pointer px-4 items-center justify-center 
                            ${selected === size ? "bg-slate-400 text-white" : ""}`}
                            onClick = {() => {setSelected(size)}} 
                            >
                                {size}
                        </span>
                    ))
                }

                <div className="justify-between ">
                    <button className="px-5 py-2 mr-5 text-white bg-slate-400 hover:bg-gray-500 cursor-pointer rounded-md mt-10">Add To Cart</button>
                    <button className="px-5 py-2 mr-5 text-white bg-green-400 hover:bg-green-500 cursor-pointer rounded-md mt-10">Buy Now</button>
                    <button className="px-5 py-2 mr-5 text-white bg-slate-400 hover:bg-gray-500 cursor-pointer rounded-md mt-10">Add To Favourite</button>
                </div>


                <div className="">
                    <button></button>
                </div>
            </div>
        </div>        
    )
}






// import { CircularProgress, Rating } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Button from "../components/Button";
// import { FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
// import { useNavigate, useParams } from "react-router-dom";

// const product = {
//     img : 'data:image/jpeg;base64,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',
//     title:"product title",
//     name:"lorem product desccc",
//     price :{
//         org:1000,
//         mrp:1500,
//         off:15,
//     },
//     sizes:['SM','M','L'],
// }

// const ProductDetails = () => {
//     const loading = false ;
//     const [selected, setSelected] = useState();
//     const [favorite, setFavorite] = useState(false);

//   return (
//     <div className="flex justify-center items-center w-full h-99 overflow-y-scroll">
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <div className="flex flex-1 max-w-1400px w-full p-12 gap-32 md:flex-col md:justify-center">
//           <div className="flex-1 flex items-center justify-center">
//             <img
//               src={product?.img}
//               alt={product?.title}
//               className="h-600px rounded-lg"
//             />
//           </div>
//           <div className="flex flex-col gap-18 flex-1 p-4">
//             <div>
//               <div className="text-28px font-semibold text-primary">
//                 {product?.title}
//               </div>
//               <div className="text-18px font-normal text-primary">
//                 {product?.name}
//               </div>
//             </div>
//             <Rating value={3.5} />
//             <div className="flex items-center gap-8 text-22px font-medium text-primary">
//               ${product?.price?.org}{" "}
//               <div className="text-secondary-60 line-through">
//                 ${product?.price?.mrp}
//               </div>{" "}
//               <div className="text-green"> ({product?.price?.off}% Off) </div>
//             </div>
//             <div className="text-16px font-normal text-primary">
//               {product?.desc}
//             </div>
//             <div className="text-18px font-medium text-primary flex flex-col gap-12">
//               <div className="flex gap-12">
//                 {product?.sizes.map((size) => (
//                   <div
//                     key={size}
//                     className={`border-1 border-primary rounded-full w-42px h-42px flex items-center justify-center ${
//                       selected === size ? "bg-primary text-white" : ""
//                     }`}
//                   >
//                     {size}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex gap-16 pt-32">
//               <Button
//                 text="Add to Cart"
//                 full
//                 outlined
//               />
//               <Button text="Buy Now" full />
//               <Button
//                 leftIcon={
//                   favorite ? (
//                     <FavoriteRounded className="text-red-500 text-22px" />
//                   ) : (
//                     <FavoriteBorder className="text-22px" />
//                   )
//                 }
//                 full
//                 outlined
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
