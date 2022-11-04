import React from "react";
import Card from "../../UI/Card/Card";
import { Row, Col, Image as BImage } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from "./RecommendationCard.module.css";

const DUMMY =
  "https://media-exp1.licdn.com/dms/image/C5103AQGDGDnudfmZTQ/profile-displayphoto-shrink_800_800/0/1579620531120?e=1672876800&v=beta&t=i5EUiXvDRI-WWOviPGt0E7oAwpivfVVrQtFctYE16oA";

const RecommendationCard = () => {
  return (
    <Card>
      <Row>
        <Col
          md={10}
          className="d-flex align-items-center justify-content-center gap-2"
        >
          <BImage roundedCircle width={52} height={52} src={DUMMY} alt="dumy" />
          <div className={styles.content}>
            <h5>Akshay Saini</h5>
            <p>Founder, NamasteDev | Teacher, Youtuber</p>
          </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <span>
            <BsFillPlusCircleFill size={30} className="mb-1" />
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default RecommendationCard;
