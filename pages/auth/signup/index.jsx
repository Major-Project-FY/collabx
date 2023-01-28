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

const Signup = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [passwordError, setPasswordError] = useState(false);
  const [otp, setOtp] = useState("");

  const [showOtpSent, setShowOtpSent] = useState(false);
  const [showOtpVerified, setShowOtpVerified] = useState(false);

  console.log("signup", userCtx);

  const onSubmit = async (data) => {
    // console.log(data);
    if (data.password !== data.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      try {
        await userCtx.login(userData);
        router.push("/home");
        // var config = {
        //   method: "post",
        //   url: "https://colabx-backend-dev.onrender.com/auth/user/signup",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   data: data,
        // };
        // const result = await axios(config);
        // if (result.data.success) {
        //   const userData = {
        //     firstName: data.firstName,
        //     lastName: data.lastname,
        //     email: data.email,
        //   };
        //   await userCtx.login(userData);
        //   router.push("/home");
        // }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getOTP = async (email) => {
    try {
      var config = {
        method: "post",
        url: "https://colabx-backend-dev.onrender.com/auth/user/signup/otp",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*"
        },
        data: email,
      };
      const result = await axios(config);
      console.log(result);
      if (result.data.success) {
        setShowOtpSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOTP = async (otp) => {
    try {
      var config = {
        method: "post",
        url: "https://colabx-backend-dev.onrender.com/auth/user/signup/verify-otp",
        headers: {
          "Content-Type": "application/json",
        },
        data: otp,
      };
      const result = await axios(config);
      console.log(result);
      if (result.data.success) {
        setShowOtpVerified(true);
      }
    } catch (error) {
      console.log(error);
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
      <Toast
        toggleShow={showOtpSent}
        show={showOtpSent}
        title="Alert"
        message="OTP has been sent successfully!"
        bg="light"
      />
      <Toast
        toggleShow={showOtpVerified}
        show={showOtpVerified}
        title="Alert"
        message="Email has been verified!"
        bg="success"
      />
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
                <Row>
                  <Col xs={8}>
                    <Form.Control
                      {...register("email", { required: true })}
                      required
                      placeholder="Email"
                      type="email"
                    />
                  </Col>
                  {/* <Col>
                    <Button
                      disable={register.email ? true : false}
                      onClick={() => getOTP(register.email)}
                      classNames="fs-6"
                    >
                      Get OTP
                    </Button>
                  </Col> */}
                </Row>
              </Form.Group>

              <Form.Group className="mb-4">
                <Row>
                  {/* <Col xs={8}>
                    <Form.Control
                      required
                      placeholder="Enter OTP"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Col> */}
                  {/* <Col>
                    <Button
                      onClick={() => verifyOTP(otp)}
                      classNames="fs-6"
                      width=""
                    >
                      Verify
                    </Button>
                  </Col> */}
                </Row>
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
        {userCtx.isLoggedIn && <h2>Redirecting...</h2>}
      </div>
    </Wrapper>
  );
};

export default Signup;
