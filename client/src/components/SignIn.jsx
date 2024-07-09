import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignIn } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccessfull } from "../redux/reducers/userSlice";
import {opensnackBar} from "./../redux/reducers/snackBarSlice"
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
const TextButton = styled.div`
  width: 100%;
  text-align: end;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate() ;
  const [userDefined , setUserDefined]  = useState() ;

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handelSignIn = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    setButtonDisabled(true);
  
    if (validateInputs()) {
      try {
        const res = await UserSignIn({ email, password });
        dispatch(loginSuccessfull(res.data));
        dispatch(
          opensnackBar({
            message: "Login Successful",
            severity: "success",
          })
        );
        // console.log(res.data);
        setUserDefined(1) ;
        navigate("/");
      } catch (err) {
        setButtonLoading(false);
        setButtonDisabled(false);
        
        const errorMessage = err.response?.data?.message || err.message;
        dispatch(
          opensnackBar({
            message: errorMessage,
            severity: "error",
          })
        );
      }
    }
  
    setButtonDisabled(false);
    setButtonLoading(false);
  };

  useEffect(()=>{
    // console.log("---------------------" , x)
    if(userDefined===1){
      window.location.replace("/")
    }
  })

  return (
    <Container>
      <div>
        <Title>Login Now ... </Title>
        <Span>Please login with your details here</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />

        {/* <TextButton>Forgot Password?</TextButton> */}

      <button className="bg-blue-500 py-3 text-white rounded-md hover:bg-blue-300"
       onClick={handelSignIn}
       isLoading={buttonLoading}
       isDisabled={buttonDisabled}
        >signin</button>
        
      </div>
    </Container>
  );
};

export default SignIn;
