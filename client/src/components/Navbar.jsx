// import React, { useState } from "react";
// import LogoImg from "../utils/Images/Logo.jpg";
// import { NavLink } from "react-router-dom";
// import Button from "../components/Button";
// import {
//   FavoriteBorder,
//   MenuRounded,
//   SearchRounded,
//   ShoppingCartOutlined,
// } from "@mui/icons-material";
// import { Avatar } from "@mui/material";

// const Navbar = ({ openAuth, setOpenAuth, currentUser }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   console.log(openAuth)

//   return (
//     <div className="bg-black h-20 flex items-center justify-center sticky top-0 z-10 text-white">
//       <div className="w-full max-w-screen-xl px-6 flex gap-3.5 items-center justify-between">
//         <div
//           className="text-white flex items-center md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <MenuRounded style={{ color: "inherit" }} />
//         </div>

//         {/* Logo---------------------------------------------------------- */}

//         <div className="flex items-center">
//           <img
//             src={LogoImg}
//             height={100}
//             width={100}
//             alt="Logo"
//             className="h-8.5"
//           />
//         </div>

//         {/* Items in desktop --------------------------------------------------- */}

//         <ul className="hidden md:flex items-center justify-center gap-8 list-none">
//           <li>
//             <NavLink
//               to="/"
//               className="text-white font-medium transition duration-300 hover:text-blue-500"
//               activeClassName="text-blue-500 border-b-2 border-blue-500"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Shop"
//               className="text-white font-medium transition duration-300 hover:text-blue-500"
//               activeClassName="text-blue-500 border-b-2 border-blue-500"
//             >
//               Shop
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/New_Arrivals"
//               className="text-white font-medium transition duration-300 hover:text-blue-500"
//               activeClassName="text-blue-500 border-b-2 border-blue-500"
//             >
//               New Arrivals
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Orders"
//               className="text-white font-medium transition duration-300 hover:text-blue-500"
//               activeClassName="text-blue-500 border-b-2 border-blue-500"
//             >
//               Orders
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Contact"
//               className="text-white font-medium transition duration-300 hover:text-blue-500"
//               activeClassName="text-blue-500 border-b-2 border-blue-500"
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>


//         {/* All Pages in small screen ------------------------------------------------------------------------------ */}

//         {isOpen && (
//           <ul className="flex flex-col items-start gap-4 p-3 w-4/5 bg-gray-800 absolute top-20 right-0 transition duration-300 ease-in-out transform md:hidden">
//             <li>
//               <NavLink
//                 to="/"
//                 className="text-white font-medium transition duration-300 hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Shop"
//                 className="text-white font-medium transition duration-300 hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Shop
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/New_Arrivals"
//                 className="text-white font-medium transition duration-300 hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 New Arrivals
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Orders"
//                 className="text-white font-medium transition duration-300 hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Orders
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Contact"
//                 className="text-white font-medium transition duration-300 hover:text-blue-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         )}


//         {/* Search , WishList , Cart Icons---------------------------- */}


//         <div className=" hidden md:flex items-center justify-center  text-white">
//           <NavLink to="/search" className= 'px-2'>
//             <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
//           </NavLink>

//           <NavLink to="/favorite"className= 'px-2'>
//             <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
//           </NavLink>

//           <NavLink to="/cart" className= 'px-2'>
//             <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
//           </NavLink>

//         </div>

//         {/* Avatar ------------------------------------------------------------------------------ */}

//         {/* <Avatar
//           src={currentUser?.img}
//           sx={{ color: "inherit", fontSize: "28px" }}
//         ></Avatar> */}

//         {/* SignIn SignUp -------------------------------------------------------------------- */}

//         <div className="flex gap-3">
//           {/* <Button
//             text="Sign Up"
//             outlined
//             small
//             onClick={() => setOpenAuth(!openAuth)}
//           /> */}
//           <Button text="Sign In" small onClick={() => setOpenAuth(!openAuth)} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.jpg";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  background-color:black;
`;
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
  height: 34px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const Mobileicons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const TextButton = styled.div`
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ openAuth, setOpenAuth, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();
  return (
    <Nav className=" bg-black ">
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Shop">Shop</Navlink>
          <Navlink to="/New_Arrivals">New</Navlink>
          <Navlink to="/Orders">Orders</Navlink>
          <Navlink to="/Contact">Contact</Navlink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Shop">
              Shop
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/New_Arrivals">
              New Arivals
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Orders">
              Orders
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Contact">
              Contact
            </Navlink>
            {currentUser ? (
              // <Button text="Logout" small onClick={() => dispatch(logout())} />
              <>HII</>
            ) : (
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  text="Sign Up"
                  outlined
                  small
                  onClick={() => setOpenAuth(!openAuth)}
                />
                <Button
                  text="Sign In"
                  small
                  onClick={() => setOpenAuth(!openAuth)}
                />
              </div>
            )}
          </MobileMenu>
        )}

        <Mobileicons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={currentUser?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                {currentUser?.name[0]}
              </Avatar>
            </>
          ) : (
            <Button
              text="SignIn"
              small
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </Mobileicons>

        <ButtonContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={currentUser?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                {currentUser?.name[0]}
              </Avatar>
              {/* <TextButton onClick={() => dispatch(logout())}>Logout</TextButton> */}
            </>
          ) : (
            <Button
              text="SignIn"
              small
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
