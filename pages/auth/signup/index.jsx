import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import Button from "../../../UI/Button/Button";
import { Form, Row, Col } from "react-bootstrap";
import Toast from "../../../UI/Toast/Toast";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../../styles/Auth.module.css";
import GithubLogin from "../github";

const Signup = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [passwordError, setPasswordError] = useState(false);

  // console.log("signup", userCtx);

  const onSubmit = async (data) => {
    if (data.password !== data.passwordConfirm) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      try {
        var config = {
          method: "post",
          url: "https://collabx-backend.onrender.com/api/auth/user/signup",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        const result = await axios(config);
        if (result.status === 200) {
          const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            userName: data.userName,
            id: data._id,
            isLoggedIn: true,
          };
          await userCtx.login(userData);
          router.push("/home");
        }
      } catch (error) {
        console.log(error);
      }
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
              <Form.Group className="mb-4">
                <Row>
                  <Col>
                    <Form.Control
                      {...register("firstName", { required: true })}
                      placeholder="First name"
                      type="string"
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      {...register("lastName", { required: true })}
                      placeholder="Last name"
                      type="string"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  {...register("email", { required: true })}
                  required
                  placeholder="Email"
                  type="email"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  {...register("userName", { required: true })}
                  required
                  placeholder="username"
                  type="text"
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
                  {...register("passwordConfirm", { required: true })}
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
            </Form>
            <p className="text-center mt-1 mb-0">Or, signup with GitHub</p>
            <GithubLogin />

            <p>
              Already have an account?{" "}
              <Link href="/auth/login">Login instead</Link>
            </p>
          </>
        )}
        {userCtx.isLoggedIn && <h2>Redirecting...</h2>}
      </div>
    </Wrapper>
  );
};

export default Signup;
