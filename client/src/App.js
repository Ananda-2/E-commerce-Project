import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShopListing from "./pages/ShopListing";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import {useSelector , useDispatch } from 'react-redux';
import { useState } from "react";
import Authentication from "./pages/Authentication";
import ToastMessage from "./components/TosteMessage";
import Orders from "./pages/Orders";
import Category from "./pages/Category";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [openAuth,setOpenAuth] = useState(false) ;
  const {currentUser} = useSelector((state) => state.user) ;
  const {open,message,severity} = useSelector((state) => state.user) ;
  window.digitalData = {
    "user" : {} ,
    "page" : {} ,
    "product" : {}
  } ;

  return (
    <>
      <BrowserRouter>
        <Container>
          <Navbar openAuth={openAuth} setOpenAuth={setOpenAuth} currentUser={currentUser} digitalData = {window.digitalData} />
          <Routes>
            <Route path="/" exact element = {<Home currentUser={currentUser} digitalData = {window.digitalData} />}/> 
            <Route path="/Category" exact element = {<Category currentUser={currentUser} digitalData = {window.digitalData} />}/> 
            <Route path="/Category/:id" exact element = {<ShopListing currentUser={currentUser} digitalData = {window.digitalData} />}/> 
            <Route path="/favourite" exact element = {<Favourite  currentUser={currentUser} digitalData = {window.digitalData}  />}/> 
            <Route path="/cart" exact element = {<Cart  currentUser={currentUser} digitalData = {window.digitalData} />}/> 
            {/* <Route path="/search" exact element = {<SearchPage/>}/>  */}
            <Route path="/Orders" exact element = {<Orders currentUser={currentUser} digitalData = {window.digitalData} />}/> 
            <Route path="/product/:id" exact element = {<ProductDetails currentUser={currentUser} digitalData = {window.digitalData} />}/> 
          </Routes>

          {openAuth && ( <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} currentUser = {currentUser}/>)}
          {open && ( <ToastMessage open={open} message={message} severity = {severity}/>)}

          <Footer/>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
