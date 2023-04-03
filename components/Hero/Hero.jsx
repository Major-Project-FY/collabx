import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Button from "../../UI/Button/Button";
import { Row, Col, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Toast from "../../UI/Toast/Toast";
import styles from "./Hero.module.css";

import RIGHTIMG from "../../assets/images/right-shapes.png";
import AVATAR from "../../assets/images/avatar.png";
import COLLAB from "../../assets/images/collab.png";
import MAP from "../../assets/images/map.png";
import MSG from "../../assets/images/msg.png";
import PROBLEM from "../../assets/images/problem.png";
import SKILLS from "../../assets/images/skills.png";

const allFeatures = [
  {
    title: "Project Collaboration",
    description:
      "Students can showcase their projects and can collaborate on project ideas",
    icon: COLLAB,
  },
  {
    title: "Skills Analysis",
    description:
      "Analysis of skills through manual input, platform integration and skill test",
    icon: SKILLS,
  },
  {
    title: "Problem Posting",
    description:
      "Post the problem statements you have and connect with peers for the solution",
    icon: PROBLEM,
  },
  {
    title: "Peer Recommendation",
    description:
      "AI recommendation system for students based on relevant skills",
    icon: AVATAR,
  },
  {
    title: "Roadmap Generator",
    description: "Customised roadmap generation with progress tracking ",
    icon: MAP,
  },
  {
    title: "In-built Messaging",
    description: "Messaging platform for connected users",
    icon: MSG,
  },
];

const Hero = () => {
  // const code = new URLSearchParams(window.location.search).get("code");
  const userCtx = useContext(UserContext);

  const router = useRouter();
  const code = router.query.code;
  const [showErr, setShowErr] = useState(false);
  // console.log("code",code)
  // const [counter, setCounter] = useState(1);
  const githubLogin = async (code) => {
    // console.log("fun called", code);
    try {
      var config = {
        method: "post",
        url: "https://colabx-backend-dev.onrender.com/auth/github/authorize",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          code: code,
        },
      };
      const result = await axios(config);
      if (result.data.status === "successful") {
        const userData = {
          firstName: "Durgesh",
          lastName: "Ahire",
          email: "durgeshahire07@gmail.com",
          userName: "durgeshahire07",
          id: "234243242",
          isLoggedIn: true,
        };
        await userCtx.login(userData);
        router.push("/home");
      }
    } catch (error) {
      setShowErr(true);
    }
  };
  // useEffect(() => {
  // }, [code]);
  useEffect(() => {
    if (code) {
      githubLogin(code);
    }
  }, [code]);

  return (
    <Wrapper>
      <Toast
        toggleShow={showErr}
        show={showErr}
        title="Alert"
        message="Something went wrong!"
        bg="light"
      />
      <Row>
        <Col sm={12} md={6} className={styles["left-col"]}>
          <div className={styles.content}>
            <h2>Find The Right Patner For Your Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, ipsum et tempore voluptatibus exercitationem sit?
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-start gap-4 mt-5">
            <Button href="/auth/signup">
              Get Started <FaArrowRight className="mb-1" color="#EFEFF1" />
            </Button>
            <Button lightBg href="/auth/login">
              Login
            </Button>
          </div>
        </Col>
        <Col className={styles["right-col"]}>
          <Image src={RIGHTIMG} alt="CollabX" />
        </Col>
      </Row>
      <Container className={styles["feature-container"]}>
        <div className={styles["features-content"]}>
          <h2>How CollabX helps you?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor
            mollitia iure ab? Aspernatur, repellat.
          </p>
        </div>

        <div className={styles["features"]}>
          {allFeatures.map((feature) => (
            <>
              <Feature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

const Feature = ({ title, description, icon }) => {
  return (
    <div className={styles.feature}>
      <Image src={icon} alt="collabx features" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
