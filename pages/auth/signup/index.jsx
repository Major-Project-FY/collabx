import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import Button from "../../../UI/Button/Button";
import { Form } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../../styles/Auth.module.css";

const Signup = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [passwordError, setPasswordError] = useState(false);

  console.log("signup", userCtx);
  const onSubmit = async (data) => {
    // console.log(data);
    if (data.password !== data.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);

      const userData = {
        firstName: data.firstName,
        lastName: data.lastname,
        email: data.email,
      };
      await userCtx.login(userData);
      router.push("/home");
    }
  };

  if (userCtx?.isLoggedIn) {
    userCtx?.isLoggedIn && router.push("/home");
  }

  // useEffect(() => {
  //   isAuthenticated();
  // }, []);

  return (
    <Wrapper colorScheme="dark">
      <Head>
        <title>Welcome to CollabX | CollabX</title>
      </Head>
      <div className={styles.container}>
        {!userCtx?.isLoggedIn && (
          <>
            <h2>Signup to CollabX</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <p className="text-center">
                Enter your email address and password.
              </p>
              <Form.Group className="mb-4">
                <Form.Control
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                  type="string"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                  type="string"
                  required
                />
              </Form.Group>
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
                  className={passwordError ? "border border-danger" : ""}
                  onChange={() => setPasswordError(false)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm password"
                  type="password"
                  minLength={8}
                  className={passwordError ? "border border-danger" : ""}
                  onChange={() => setPasswordError(false)}
                />
              </Form.Group>
              {passwordError && (
                <p className="text-center mt-4 text-danger">
                  Passwords did not match.
                </p>
              )}

              <Button responsive>Signup</Button>
              <p className="text-center mt-4">Or, signup with GitHub</p>
              <Button responsive>
                <FaGithub size="20" className="mb-1" color="#EFEFF1" /> GitHub
              </Button>
            </Form>
            <p>
              Already have an account?{" "}
              <Link href="/auth/login">Login instead</Link>
            </p>
          </>
        )}
        {userCtx.isLoggedIn && (<h2>Redirecting...</h2>)}
      </div>
    </Wrapper>
  );
};

export default Signup;
