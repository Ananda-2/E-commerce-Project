import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  background:'white';
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

const SignUp = ({ setOpenAuth }) => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

//   const handleSignUp = async () => {
//   };

  return (
    <Container>
      <div>
        <Title>Create A New Account</Title>
        <Span>Please enter details to create an account</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={name}
          handelChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          password
          value={password}
        //   handelChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 py-3 text-white rounded-md hover:bg-blue-300"
        //   onClick={handleSignUp}
          isLoading={loading}
          isDisabled={buttonDisabled}
        >signup</button>
        
      </div>
    </Container>
  );
};

export default SignUp;