/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/userContext";

import Wrapper from "../../UI/Wrapper/Wrapper";
import PostCard from "../../components/PostCard/PostCard";
import CreatePost from "../../components/CreatePost/CreatePost";

import { Row, Col } from "react-bootstrap";

import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
  const userCtx = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (userCtx?.isLoggedIn) {
      userCtx?.isLoggedIn === false && router.push("/");
    }
  }, []);

  return (
    <>
      <Navbar />

      <Wrapper>
        <Row>
          <Col sm={12} md={6}>
            <h2>Left</h2>
            <CreatePost />   
            <PostCard />
          </Col>
          <Col>
            <h2>Right</h2>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default Home;
