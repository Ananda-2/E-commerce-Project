import React, { useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-pInOVBxDQbOvsugpjHBg9MbP-xSGw_zWxkYHPsUYjNvUFbpb6_1tIkJrnt9gs9uwVgukU8LUpL40K5dHhlu8RDlHE5vBm7CsrLxYlZlXFGV8IdEs8xmAxg7w&usqp=CAc",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Consectetur adipiscing elit",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-pInOVBxDQbOvsugpjHBg9MbP-xSGw_zWxkYHPsUYjNvUFbpb6_1tIkJrnt9gs9uwVgukU8LUpL40K5dHhlu8RDlHE5vBm7CsrLxYlZlXFGV8IdEs8xmAxg7w&usqp=CAc",
      price: 150,
      quantity: 2,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Sed do eiusmod tempor incididunt",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-pInOVBxDQbOvsugpjHBg9MbP-xSGw_zWxkYHPsUYjNvUFbpb6_1tIkJrnt9gs9uwVgukU8LUpL40K5dHhlu8RDlHE5vBm7CsrLxYlZlXFGV8IdEs8xmAxg7w&usqp=CAc",
      price: 200,
      quantity: 1,
    },
  ]);

    // form handle functions ---------------------------------------------------------------------
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      cardNumber:"",
      ExpairyDate:"",
      cvv:"",
      CardHolderName:""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, e.g., sending data to backend or processing it
      console.log(formData);
      // Reset form after submission if needed
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        cardNumber:"",
        ExpairyDate:"",
        cvv:"",
        CardHolderName:""
      });
    };
  
  
    // table functions ---------------------------------------------------------------------------------
  

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedProducts = [...products];
      updatedProducts[index].quantity = newQuantity;
      setProducts(updatedProducts);
    }
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };



  return (

    <div>

      {/* table details ----------------------------------------------------------------------- */}
      <div className="container mx-auto max-w-[90%] mt-10 rounded-md ">
        <h2 className="text-xl font-bold mb-4 text-center">Cart Products</h2>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Product</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {products.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full mr-2" />
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-gray-500">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">${product.price}</td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(index, product.quantity - 1)}
                        className="text-gray-500 focus:outline-none p-5 "
                      >
                        -
                      </button>
                      <span className="mx-2 border-gray-500 border px-3 py-1 rounded-md ">{product.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(index, product.quantity + 1)}
                        className="text-gray-500 focus:outline-none p-5"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">${calculateSubtotal(product.price, product.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* payment gatewayy-------------------------------------------------------------------- */}




    <form className="px-8 py-6" onSubmit={handleSubmit}>

    <div className="flex   ">
      <div className="container max-w-[80%]  mx-auto px-10  ">
      <h2 className="text-xl font-bold mb-4 text-center">Address Details</h2>
      <div className="bg-white shadow-md rounded my-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Enter your address"
              required
            />
          </div>
      </div>
      </div>


      <div className="container max-w-[80%]  mx-auto px-10 ">
      <h2 className="text-xl font-bold mb-4 text-center">Payment Details</h2>
      <div className="bg-white shadow-md rounded my-6">
        {/* <form className="px-8 py-6" onSubmit={handleSubmit}> */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Card Number
            </label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your card number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ExpairyDate" className="block text-gray-700 text-sm font-bold mb-2">
            Expairy Date
            </label>
            <input
              type="date"
              id="ExpairyDate"
              name="ExpairyDate"
              value={formData.ExpairyDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Expairy Date"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
              C V V
            </label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter cvv "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="CardHolderName" className="block text-gray-700 text-sm font-bold mb-2">
            Card Holder Name
            </label>
            <input
              id="CardHolderName"
              name="CardHolderName"
              value={formData.CardHolderName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Enter Card Holder Name"
              required
            />
          </div>
      </div>
      </div>
    </div>
      <div className="flex items-center justify-center ">
        <button
          type="submit"
          className="bg-blue-500 w-[40%] justify-center items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Buy Now
        </button>
      </div>
    </form>
    </div>
  )
}

export default Cart;
