/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/userContext";

import Wrapper from "../../UI/Wrapper/Wrapper";
import PostCard from "../../components/PostCard/PostCard";
import CreatePost from "../../components/CreatePost/CreatePost";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ExploreCard from "../../components/ExploreCard/ExploreCard";

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

      <div className={styles.container}>
        <Row>
          <Col sm={12} md={7}>
            <CreatePost />
            <PostCard />
            <PostCard />
          </Col>
          <Col>
            <p style={{ margin: "1rem" }}>
              Follow for collaboration .{" "}
              <span className="text-muted">See more</span>
            </p>
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />

            {/* <div className={styles.explore}>
            <p style={{ margin: "1rem" }}>
              Explore
            </p>
              <ExploreCard />
            </div> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
