/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/userContext";
import Toast from "../../UI/Toast/Toast";
import Wrapper from "../../UI/Wrapper/Wrapper";
import PostCard from "../../components/PostCard/PostCard";
import CreatePost from "../../components/CreatePost/CreatePost";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const userCtx = useContext(UserContext);
  // console.log(userCtx.userData);
  const router = useRouter();
  const [showErr, setShowErr] = useState(false);
  const [data, setData] = useState([]);
  const checkUserLoggedIn = async () => {
    if (userCtx) {
      // userCtx?.isLoggedIn === false && router.push("/");
    }
  };

  const getPost = async () => {
    try {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://collabx-backend.onrender.com/api/project/list",
        headers: {},
      };
      const result = await axios(config);
      if (result.status === 200) {
        console.log("res ",result)
        setData(result.data.reverse());
      }
    } catch (error) {
      setShowErr(true);
    }
  };

  const getGithubRepo = async () => {
    try {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://ec2-35-173-200-23.compute-1.amazonaws.com/user/github-repos",
        headers: {},
      };
      const result = await axios(config);
      if (result.status === 200) {
        console.log("res ",result)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(data)
  useEffect(() => {
    getPost();
    getGithubRepo();
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
        <Row>
          <Col sm={12} md={7}>
            <CreatePost postData={data} setPostData={setData} id={userCtx?.userData?.id}/>
            {data?.map((item) => {
              return (
                <PostCard
                  key={item?._id}
                  title={item?.title}
                  address={item?.address}
                  description={item?.description}
                  name={`${item?.user?.firstName}${" "}${item?.user?.lastName}`}
                  userName={item?.user?.userName}
                />
              );
            })}
          </Col>
          <Col>
            <SearchBar />
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
