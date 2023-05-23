/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/userContext";
import Toast from "../../UI/Toast/Toast";
import Wrapper from "../../UI/Wrapper/Wrapper";
import PostCard from "../../components/PostCard/PostCard";
import CreatePost from "../../components/CreatePost/CreatePost";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import styles from "../../styles/Home.module.css";
import Config from "../../config";

const Home = ({ posts }) => {
  const userCtx = useContext(UserContext);
  // console.log(userCtx.userData);
  const router = useRouter();
  const [showErr, setShowErr] = useState(false);
  const [users, setUsers] = useState([]);
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
        withCredentials: true,
        url: `${Config.root + Config.post.list}`,
      };
      const result = await axios(config);

      if (result.status === 200) {
        setData(result.data.reverse());
      }
    } catch (error) {
      console.log("err code", error?.response?.code);
      if (error?.response?.status === 401) {
        localStorage.clear();
        // router.push("/auth/login");
      }
      setShowErr(true);
    }
  };
  const getUsers = async () => {
    try {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        withCredentials: true,
        url: `${Config.root + Config.user.recommendations}`,
      };
      const result = await axios(config);

      if (result.status === 200) {
        // console.log("recommend res ", result);
        setUsers(result?.data);
        // setData(result.data.reverse());
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
        url: `${Config.root + Config.user.githubRepos}`,
        headers: {
          "access-control-allow-credentials": true,
        },
        withCredentials: true,
      };
      const result = await axios(config);

      // const result = await axios.get(BACKEND_GITHUB_REPOS, {
      //   withCredentials: true,
      // });

      if (result.status === 200) {
        console.log("res ", result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data)
  useEffect(() => {
    getPost();
    getGithubRepo();
    getUsers();
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
            <CreatePost />
            {data?.map((item) => {
              return (
                <PostCard
                  key={item?.projectID}
                  title={item?.postTitle}
                  address={item?.projectURLs[0] ?? "no source provided"}
                  description={item?.postDescription}
                  name={`${item?.users?.name.trim()}`}
                  // userName={item?.user?.userName}
                />
              );
            })}
            {/* <PostCard
              key={`kajskdjf`}
              title="Tesla"
              address="http://www.elon.musk.com"
              description="Elon musk is a musk made for men"
              name={`Elon `.trim()}
              // userName={item?.user?.userName}
            /> */}
          </Col>
          <Col>
            <SearchBar />
            <p style={{ margin: "1rem" }}>
              Follow for collaboration .{" "}
              <span className="text-muted">See more</span>
            </p>
            {users.map((item) => {
              return (
                <div key={item?.userID}>
                  <RecommendationCard
                    firstName={item?.firstName}
                    lastName={item?.lastName}
                    email={item?.userMail}
                  />
                </div>
              );
            })}

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
