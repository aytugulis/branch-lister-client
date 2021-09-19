import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useActions, useError } from "../hooks";

import Loading from "../components/Loading/Loading";

import {
  AuthBoxContainer,
  AuthLine,
  AuthLink,
  Box,
  Form,
  Head,
} from "../components/AuthBox/stylesAuthBox";
import { InputText, Button } from "../styles/mainStyles";

const RegisterScreen = () => {
  const { register, cleanupRegister } = useActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const { error, loading } = useSelector((state) => state.userRegister);
  useError(error);

  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== rePassword) toast.error("Password does not match");
    else register(email, password);
  };

  const emailChanceHandler = (e) => setEmail(e.target.value);
  const passwordChanceHandler = (e) => setPassword(e.target.value);
  const rePasswordChanceHandler = (e) => setRePassword(e.target.value);

  useEffect(() => {
    return () => {
      cleanupRegister();
    };
  }, []);

  return (
    <>
      <AuthBoxContainer>
        <Box>
          <Head>Create employee account</Head>
          <AuthLine />
          <Form onSubmit={registerHandler}>
            <InputText
              value={email}
              name="email"
              type="text"
              placeholder="Email"
              onChange={emailChanceHandler}
            />
            <InputText
              value={password}
              name="email"
              type="password"
              placeholder="Password"
              onChange={passwordChanceHandler}
            />
            <InputText
              value={rePassword}
              name="email"
              type="password"
              placeholder="Password (Again)"
              onChange={rePasswordChanceHandler}
            />
            <Button type="submit" color="primary">
              Register
            </Button>
          </Form>
          <AuthLink to="/login">Do you have an account ?</AuthLink>
        </Box>
      </AuthBoxContainer>
      {loading && <Loading />}
    </>
  );
};

export default RegisterScreen;
