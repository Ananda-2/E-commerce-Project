import {React,useEffect,useState} from "react";
import { Rating } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../api/index.js";
import { addToFavourites,removeFromFavorites ,getFavouritesDetails,addToCart} from "./../api/index.js";
import { opensnackBar } from "./../redux/reducers/snackBarSlice.js";


const sizes = ['SM','M','L'] ;

export default function ProductDetails(){
    const [selected,setSelected] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const [product,setProduct] = useState();
    const [favorite, setFavorite] = useState(false);
    const [favoriteLoading, setFavoriteLoading] = useState(false);
  
    const addFavorite = async () => {
      setFavoriteLoading(true);
      console.log(product._id);
      const token = localStorage.getItem("krist-app-token");
      await addToFavourites(token, { productId: product?._id  })
        .then((res) => {
          setFavorite(true);
          setFavoriteLoading(false);
          console.log("added to fav")
          alert("added to favourite") ;
        })
        .catch((err) => {
          console.log("not added")
          setFavoriteLoading(false);
          dispatch(
            opensnackBar({
              message: err.message,
              severity: "error",
            })
          );
        });
    };
    const removeFavorite = async () => {
      setFavoriteLoading(true);
      console.log(product._id);
      const token = localStorage.getItem("krist-app-token");
      await removeFromFavorites(token, { productId: product?._id })
        .then((res) => {
          setFavorite(false);
          setFavoriteLoading(false);
          alert("removed from fav")

        })
        .catch((err) => {
          setFavoriteLoading(false);
          dispatch(
            opensnackBar({
              message: err.message,
              severity: "error",
            })
          );
        });
    };
    const addCart = async () => {
      const token = localStorage.getItem("krist-app-token");
      await addToCart(token, { productId: product?._id, quantity: 1 })
        .then((res) => {
          navigate("/cart");
        })
        .catch((err) => {
          dispatch(
            opensnackBar({
              message: err.message,
              severity: "error",
            })
          );
        });
    };
    const checkFavourite = async () => {
      setFavoriteLoading(true);
      const token = localStorage.getItem("krist-app-token");
      await getFavouritesDetails(token, { productId: product?._id })
        .then((res) => {
          const isFavorite = res.data?.some(
            (favorite) => favorite._id === product?._id
          );
  
          console.log(isFavorite) ;
  
          setFavorite(isFavorite);
          setFavoriteLoading(false);
        })
        .catch((err) => {
          setFavoriteLoading(false);
          dispatch(
            opensnackBar({
              message: err.message,
              severity: "error",
            })
          );
        });
    };
  
    useEffect(()=>{
      checkFavourite();
    },[favorite]) ;
  

    const getProduct = async () => {
        await getProductDetails(id).then((res) => {
            setProduct(res.data) ;
        })
    }

    useEffect(()=>{
        getProduct();
    },[]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen m-auto ">
            <div className=" flex-1 justify-center items-center m-auto text-center ">
                <img src= {product?.img} alt="" srcset="" 
                className="m-auto mt-10 cover items-center justify-center mb-16 rounded-md " height={300} width={300}/>
            </div>
            <div className="flex-1 items-center justify-center text-left px-10 ">
                <h1 className="mt-24 font-bold text-gray-700 text-2xl ">{product?.title}</h1>
                <h2 className="text-base my-5 text-gray-400">{product?.desc}</h2>
                 <Rating value={3.5} sx={{ fontSize: "24px" }} />

                 <div className="flex items-center gap-2">
                    <div className="text-lg font-medium">${product?.price.org}</div>
                    <div className="text-secondary-60 line-through text-gray-500 p-5 ">${product?.price.mrp}</div>
                    <div className="text-green-500 text-xs font-medium">{product?.price.off}% Off</div>
                </div>

                {
                    product?.sizes.map((size)=>(
                        <span className={`border border-blue-400  rounded-full py-1 mr-3 cursor-pointer px-4 items-center justify-center 
                            ${selected === size ? "bg-slate-400 text-white" : ""}`}
                            onClick = {() => {setSelected(size)}} 
                            >
                                {size}
                        </span>
                    ))
                }

                <div className="flex flex-row">
                    <button className="px-5 py-2 mr-5 text-white bg-slate-400 hover:bg-gray-500 cursor-pointer rounded-md mt-10"
                        onClick={()=> addCart()}>
                    Add To Cart</button>
                    <button className="px-5 py-2 mr-5 text-white bg-green-400 hover:bg-green-500 cursor-pointer rounded-md mt-10">Buy Now</button>
                    <button className="px-5 py-2 mr-5 text-white bg-slate-400 hover:bg-gray-500 cursor-pointer rounded-md mt-10"
                        onClick={()=> favorite? removeFavorite() : addFavorite()}>
                            {favorite? <>Remove From Favourite</> : <>Add To Favourite</>}
                    </button>
                </div>


                <div className="">
                    <button></button>
                </div>
            </div>
        </div>        
    )
}