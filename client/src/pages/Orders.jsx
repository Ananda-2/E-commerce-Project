import React , {useState,useEffect}  from 'react'
import {getAllOrders , getProductDetails} from './../api/index.js'

const productMap = {} ;

// const getProd = async (id) => {
//     await getProductDetails(id).then((res)=>{
//         productMap[id] = res.data ;
//         // console.log(productMap[id]) ;
//     }) ;
// }

// const getTitle  = async (id) =>{
//     await getProductDetails(id).then((res)=>{
//         return res.data ;
        
//     }) ;
// }

function Orders () {
    const [orders,setOrders] = useState() ;

    const getOrderDetails = async () => {
        const token = localStorage.getItem("krist-app-token");
        await getAllOrders(token).then((res)=>{
            setOrders(res.data) ;

            console.log(res.data[0].total_amount["$numberDecimal"]
            );
            
            // res.data.map((order) =>(
            //     order.products?.map((p)=>(
            //         getProd(p.product) 
            //     ))
            // ))

        //    {productMap.size && console.log(productMap["667cfa6b193b44d559a24c16"]) ;}
        })
    }

    useEffect(()=>{
        getOrderDetails();
    },[]);

    return (
        <div className=" min-h-screen mb-10 ">
            <div className="my-10 text-center font-bold text-2xl">Past Orders</div>

            { orders?.map((order) => (
                <>
                <div className="container mx-auto max-w-[90%] mt-10 rounded-md ">
                    <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-max w-full table-auto">
                        <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Product ID</th>
                            {/* <th className="py-3 px-6 text-left">Price</th> */}
                            <th className="py-3 px-6 text-left">Quantity</th>
                            <th className="py-3 px-6 text-left">Date Of Purches</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {order?.products?.map((item, index) => (
                                 <tr key={item.product.id} className="border-b border-gray-200 hover:bg-gray-100">
                                 <td className="py-3 px-6 text-left">
                                       <div className="font-bold cursor-pointer hover:text-blue-700 " onClick={()=> window.location.replace(`/product/${item.product}`)}>{item.product}</div>
                                 </td>
                                 <td className="py-3 px-6 text-left">${item.quantity}</td>
                                 
                                 <td className="pt-3 px-6 text-left">{order.createdAt}</td>
                               </tr>
                            ))}
                        </tbody>

                    </table>
                    </div>
                </div>

                <div className='text-right mr-72 font-bold text-gray-500 text-xl'>Total Amount - {order?.total_amount["$numberDecimal"]
                }</div>

                </>
            ))}


        </div>
    )
}

export default Orders ;