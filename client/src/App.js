import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Authentication from "./pages/Authentication";

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  const currentUser = false ;
  return (
    <>
      <BrowserRouter>
        <Container>
          <Navbar openAuth={openAuth} setOpenAuth={setOpenAuth} />
          {openAuth && ( <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} currentUser = {currentUser}/>)}
          <Routes>
            <Route path="/" exact element = {<Home/>}/> 
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
