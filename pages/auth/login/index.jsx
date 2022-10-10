import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import Button from "../../../UI/Button/Button";
import { Form } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Head from "next/head";

import styles from "../../../styles/Auth.module.css";

const Login = () => {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  if (userCtx?.isLoggedIn) {
    userCtx?.isLoggedIn && router.push("/");
  }

  return (
    <Wrapper colorScheme="dark">
      <Head>
        <title>Welcome to CollabX | CollabX</title>
      </Head>
      <div className={styles.container}>
        {!userCtx?.isLoggedIn && (
          <>
            <h2>Login to CollabX</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <p className="text-center">
                Enter your email address and password.
              </p>

              <Form.Group className="mb-4">
                <Form.Control
                  {...register("email", { required: true })}
                  placeholder="Email"
                  type="email"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  {...register("password", { required: true })}
                  placeholder="Password"
                  type="password"
                  minLength={8}
                />
              </Form.Group>

              <p className="text-decoration-underline text-center">
                Forget your password?
              </p>

              <Button responsive>Login</Button>
              <p className="text-center mt-4">Or, login with GitHub</p>
              <Button responsive>
                <FaGithub size="20" className="mb-1" color="#000" /> GitHub
              </Button>
            </Form>
            <p>
              New user? <Link href="/auth/signup">Create a new account</Link>
            </p>
          </>
        )}
        {userCtx?.isLoggedIn && <h2>Redirecting...</h2>}
      </div>
    </Wrapper>
  );
};

export default Login;
