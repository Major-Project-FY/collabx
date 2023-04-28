import React from "react";
import Image from "next/image";

import { Col, Row, Tab, Nav, Card as BCard } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Button from "../../UI/Button/Button";

// Forms
import BasicDetails from "../../components/ProfilePage/Profile/BasicDetails";
import EduDetails from "../../components/ProfilePage/Profile/EduDetails";
import Projects from "../../components/ProfilePage/Projects/Projects";

import GITHUBIMG from "../../public/socialIcons/github.png";
import GITLABIMG from "../../public/socialIcons/gitlab.png";
// import HACKERRANKIMG from "../../public/socialIcons/hackerank.png";
// import LINKEDINIMG from "../../public/socialIcons/linkedin.png";

import styles from "../../styles/profile.module.css";
import Ranking from "../../components/Ranking/Ranking";
import { FaCheck } from "react-icons/fa";
import Config from "../../config";

const socialIntegration = [
  {
    id: 1,
    title: "Github",
    icon: GITHUBIMG,
  },
  {
    id: 2,
    title: "Gitlab",
    icon: GITLABIMG,
  },
  // {
  //   id: 3,
  //   title: "Hackerrank",
  //   icon: HACKERRANKIMG,
  // },
  // {
  //   id: 4,
  //   title: "Linkedin",
  //   icon: LINKEDINIMG,
  // },
];

const Index = () => {
  // const userCtx = useContext(UserContext);
  // console.log(userCtx?.userData)
  return (
    <div className={styles.container}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className={styles["row-container"]}>
          <Col className={styles["left-col"]} sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Integration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Projects</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="fourth">Ranking</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Col>
          <Col sm={1}></Col>
          <Col className={styles["right-col"]} sm={8}>
            <Tab.Content>
              
              <Tab.Pane as="div" eventKey="first">
                <DetailCards title="Basic Details">
                  <BasicDetails />
                </DetailCards>
                <DetailCards title="Education Details">
                  <EduDetails />
                </DetailCards>

                {/* <DetailCards title="Work Experience">
                  <WorkDetails />
                </DetailCards> */}

                <div className="d-flex align-items-center justify-content-center mb-5">
                  <Button>Save</Button>
                </div>
              </Tab.Pane>
              
              <Tab.Pane as="div" eventKey="second">
                <ProfileIntegration socialIntegration={socialIntegration} />
                <br />
                <Roadmap />
                <BCard bg="transparent">
                  <BCard.Header className={styles["card-header"]}>
                    Current User Ranking
                  </BCard.Header>
                  <BCard.Body as="div">
                    <Ranking />
                  </BCard.Body>
                </BCard>
              </Tab.Pane>
              
              
              <Tab.Pane as="div" eventKey="third">
                <BCard bg="transparent">
                  <BCard.Header className={styles["card-header"]}>
                    Project Details
                  </BCard.Header>
                  <BCard.Body as="div">
                    <Projects />
                  </BCard.Body>
                </BCard>
              </Tab.Pane>

              {/* <Tab.Pane as="div" eventKey="fourth">
                
              </Tab.Pane> */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

const Roadmap = () => {
  return (
    <BCard bg="transparent">
      <BCard.Header className={`${styles["card-header"]} ps-4`}>
        DevRoadmaps
      </BCard.Header>
      <BCard.Body className="p-4" as="div">
        <BCard.Text className="fw-bold">Role based roadmaps</BCard.Text>
        <div className="d-flex align-items-center gap-3 flex-wrap mb-3">
          <Button
            className="px-5 py-3 bg-primary w-25"
            href="http://localhost:3001/frontend"
          >
            Frontend
          </Button>
          <Button
            className="px-5 py-3 bg-primary w-25"
            href="http://localhost:3001/backend"
          >
            Backend
          </Button>
          <Button
            className="px-5 py-3 bg-primary w-25"
            href="http://localhost:3001/cyber-security"
          >
            Cyber Security
          </Button>
          <Button
            className="px-5 py-3 bg-primary w-25"
            href="http://localhost:3001/postgresql-dba"
          >
            DBA
          </Button>
        </div>

        <BCard.Text className="fw-bold">Skill based roadmaps</BCard.Text>
        <div className="d-flex align-items-center gap-3 flex-wrap mb-3">
          <Button
            className="px-5 py-3 bg-primary w-25"
            href="http://localhost:3001/react"
          >
            React
          </Button>
          <Button
            className="px-5 py-3 bg-primary w-25"
            href="http://localhost:3001/nodejs"
          >
            Node.js
          </Button>
          {/* <Button className="px-5 py-3 bg-primary w-25"  href="http://localhost:3001/frontend">MongoDB</Button> */}
        </div>
        {/* <div className={styles["social-icons"]}>
          {socialIntegration.map((data) => (
            <IconCard key={data.id} title={data.title} icon={data.icon} />
          ))}
        </div> */}
      </BCard.Body>
    </BCard>
  );
};

const ProfileIntegration = ({ socialIntegration }) => {
  return (
    <BCard bg="transparent">
      <BCard.Header className={`${styles["card-header"]} ps-4`}>
        Profile Integration
      </BCard.Header>
      <BCard.Body className="p-4" as="div">
        <BCard.Text>
          Integrate your accounts to showcase your projects, enhance your
          profile and explore the skills analysis section
        </BCard.Text>
        <div className={styles["social-icons"]}>
          {socialIntegration.map((data) => (
            <IconCard key={data.id} title={data.title} icon={data.icon} />
          ))}
        </div>
      </BCard.Body>
    </BCard>
  );
};

const DetailCards = ({ children, title }) => {
  return (
    <BCard className="mb-3" bg="transparent">
      <BCard.Header className={styles["card-header"]}>{title}</BCard.Header>
      <BCard.Body as="div">{children}</BCard.Body>
    </BCard>
  );
};

const IconCard = ({ title, icon }) => {
  return (
    <div className={styles["icon-card"]}>
      <div className={styles["icon-content"]}>
        <Image height="30" width="30" src={icon} alt="github" />
        <p className="mt-3">{title}</p>
      </div>
      <span>
        {title === "Github" ? (
          <FaCheck size={30} />
        ) : (
          <BsFillPlusCircleFill size={30} />
        )}
      </span>
    </div>
  );
};

export default Index;
