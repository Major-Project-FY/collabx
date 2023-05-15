import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "../../../UI/Wrapper/Wrapper";
import Toast from "../../../UI/Toast/Toast";
import Button from "../../../UI/Button/Button";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Head from "next/head";
import axios from "axios";
import styles from "../../../styles/Auth.module.css";
import GithubLogin from "../github";
import Config from "../../../config";

let BACKENDAUTH = "https://colabx-backend-dev.onrender.com/api/auth/user/login";

const Login = () => {
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [showErr, setShowErr] = useState(false);

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      var config = {
        method: "post",
        url: `${Config.root + Config.auth.login}`,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-credentials": true,
        },
        data: data,
      };

      // console.log(data)
      const result = await axios(config);

      // const result = await axios.post(
      //   BACKENDAUTH,
      //   { data },
      //   {
      //     withCredentials: true,
      //   }
      // );

      console.log("res", result);
      if (result.status === 200) {
        const userData = {
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          email: result.data.email,
          userName: result.data.userName,
          id: result.data._id,
          isLoggedIn: true,
        };
        // console.log("user data",userData);
        await userCtx.login(userData);
        router.push("/home");
      }
    } catch (error) {
      setShowErr(true);
      // console.log(error);
    }
  };
  if (userCtx?.isLoggedIn) {
    userCtx?.isLoggedIn && router.push("/home");
  }

  return (
    <Wrapper colorScheme="dark">
      <Toast
        toggleShow={showErr}
        show={showErr}
        title="Alert"
        message="Incorrect email or password."
        bg="light"
      />
      <Head>
        <title>Welcome to CollabX | CollabX</title>
      </Head>
      <div className={styles.container}>
        {!userCtx?.isLoggedIn && (
          <>
            <h2>Welcome back!</h2>
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
                  {...register("userPassword", { required: true })}
                  placeholder="Password"
                  type="password"
                  minLength={8}
                />
              </Form.Group>

              {/* <p className="text-decoration-underline text-center">
                Forget your password?
              </p> */}

              <Button responsive>Login</Button>
            </Form>
            <p className="text-center mt-1 mb-0">Or, login with GitHub</p>
            <GithubLogin />
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
