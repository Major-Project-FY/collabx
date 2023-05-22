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
    {
      postID: "6157cd65-a2c1-4c11-8f4d-6d26daa4b3cf",
      userID: "35914932-8e10-4bd0-bf61-ec0aaa438a56",
      statementText:
        "Design a system that efficiently manages and minimizes traffic congestion in a busy city. The solution should incorporate real-time traffic monitoring, intelligent traffic signal control, and route optimization algorithms to reduce travel time and improve overall traffic flow. The system should also consider factors like emergency vehicle prioritization and pedestrian safety.",
      postURLs: [
        "https://ops.fhwa.dot.gov/publications/congestion_mgmt_strategies/index.html",
        "https://transportationops.org/its-solutions/intelligent-traffic-signal-systems",
        "https://towardsdatascience.com/route-optimization-for-transportation-1f34b63793c6",
      ],
      postedOn: "2023-05-10T07:03:00.643Z",
    },
    {
      postID: "bf0dd55a-1eab-455f-bfc1-346018eae938",
      userID: "35914932-8e10-4bd0-bf61-ec0aaa438a56",
      statementText:
        "Develop an intelligent waste management system that optimizes waste collection routes and schedules for a city. The system should use data from sensors placed in waste bins to monitor the fill-level and generate optimized collection routes for waste collection trucks. The solution should minimize travel distances, reduce fuel consumption, and improve the efficiency of waste collection operations.",
      postURLs: [
        "https://www.sciencedirect.com/science/article/pii/S0956053X14004708",
        "https://wasteadvantagemag.com/waste-management-optimization-a-comprehensive-guide",
        "https://www.epa.gov/air-research/air-quality-monitoring-assessment-and-management",
      ],
      postedOn: "2023-05-10T06:57:15.429Z",
    },
    {
      postID: "c498e249-1c85-42eb-b28b-2850f45608aa",
      userID: "35914932-8e10-4bd0-bf61-ec0aaa438a56",
      statementText:
        "Create a system for monitoring and analyzing air quality in urban areas. The system should collect data from a network of sensors placed strategically across the city and provide real-time information about air pollution levels. It should also analyze the data to identify patterns, sources of pollution, and potential health risks. The system should provide insights to help city authorities make informed decisions and take proactive measures to improve air quality.",
      postURLs: ["https://informeddecisions.com/air-quality-monitoring", ""],
      postedOn: "2023-05-10T05:58:29.744Z",
    },
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
        console.log("res data", result.data);
        setData(result.data);
      }
    } catch (error) {
      console.log("err code", error?.response?.code);
      if (error?.response?.status === 401) {
        localStorage.clear();
         router.push('/auth/login');
      }
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
          <br />
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
