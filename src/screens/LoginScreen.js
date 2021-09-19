import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useActions, useError } from "../hooks";
import {
  AuthBoxContainer,
  AuthLine,
  AuthLink,
  Box,
  Form,
  Head,
} from "../components/AuthBox/stylesAuthBox";
import Loading from "../components/Loading/Loading";
import { InputText, Button } from "../styles/mainStyles";

const LoginScreen = () => {
  const { login, cleanupLogin } = useActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading } = useSelector((state) => state.userLogin);
  useError(error);

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const emailChanceHandler = (e) => setEmail(e.target.value);
  const passwordChanceHandler = (e) => setPassword(e.target.value);

  useEffect(() => {
    return () => {
      cleanupLogin();
    };
  }, []);

  return (
    <>
      <AuthBoxContainer>
        <Box>
          <Head>Login</Head>
          <Head>Admin credentials to test:</Head>
          <Head>admin@gmail.com</Head>
          <Head>123456</Head>
          <AuthLine />
          <Form onSubmit={loginHandler}>
            <InputText
              value={email}
              name="email"
              type="text"
              placeholder="Email"
              onChange={emailChanceHandler}
            />
            <InputText
              value={password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={passwordChanceHandler}
            />
            <Button type="submit" color="primary">
              Login
            </Button>
          </Form>
          <AuthLink to="/register">Do not you have an account ?</AuthLink>
        </Box>
      </AuthBoxContainer>
      {loading && <Loading />}
    </>
  );
};

export default LoginScreen;
