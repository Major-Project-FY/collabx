/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/userContext";
import Toast from "../../UI/Toast/Toast";
import Wrapper from "../../UI/Wrapper/Wrapper";
import PrblmPostCard from "../../components/PrblmPostCard";
import CreatePrblmPost from "../../components/CreatePrblmPost";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Config from "../../config";

const ProblemHub = () => {
  const userCtx = useContext(UserContext);
  const [showErr, setShowErr] = useState(false);

  const [data, setData] = useState([
    // {
    //   postID: "6157cd65-a2c1-4c11-8f4d-6d26daa4b3cf",
    //   userID: "35914932-8e10-4bd0-bf61-ec0aaa438a56",
    //   statementText: " A sample problem statement",
    //   postURLs: ["https://www.google.com", "dummy"],
    //   user: {
    //     name: "Durgesh",
    //   },
    // },
  ]);
  const router = useRouter();

  const getProblemHubPosts = async () => {
    try {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        withCredentials: true,
        url: `${Config.root + Config.statement.list}`,
      };
      const result = await axios(config);
      if (result.status === 200) {
        console.log("res data",result.data);
        setData(result.data);
      }
    } catch (error) {
      setShowErr(true);
    }
  };

  useEffect(() => {
    getProblemHubPosts();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Toast
          toggleShow={showErr}
          show={showErr}
          title="Alert"
          message="Something went wrong."
          bg="light"
        />
        <div>
          <h4 className="text-center font-weight-bold text-monospace text-xl">
            Unleash the Power of Collaboration - Share, Solve, and Innovate!
          </h4>
          <br/>
          {/* <p>
            Welcome to the Problem Hub, a dynamic platform where great minds
            meet to tackle real-world challenges. Whether you're an aspiring
            problem solver or someone with a burning problem in mind, this
            feature enables you to connect and collaborate with like-minded
            individuals. Share your problem statements and discover a community
            of talented students ready to provide innovative solutions.
            Together, let's transform ideas into impactful projects and build a
            brighter future. Join CollabX's Problem Hub and unlock a world of
            collaboration possibilities!
          </p > */}
        </div>
        <Row className="ms-5 me-5">
          <Col>
            <CreatePrblmPost />
            {data?.map((item) => {
              return (
                <PrblmPostCard
                  key={item?.postID}
                  statement={item?.statementText}
                  urls={item?.postURLs}
                  name={`${item?.user?.name.trim()}`}
                  // userName={item?.user?.userName}
                />
              );
            })}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProblemHub;
