import React from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import { Row, Col, Image as BImage } from "react-bootstrap";
import Card from "../../UI/Card/Card";
import styles from "./ExploreCard.module.css";

import IMG1 from "../../assets/homeImages/1.png";
import IMG2 from "../../assets/homeImages/2.png";
import IMG3 from "../../assets/homeImages/3.png";
import IMG4 from "../../assets/homeImages/4.png";
import IMG5 from "../../assets/homeImages/5.png";

const ExploreCard = () => {
  return (
    <Row>
      <BImage src={IMG4} alt="img" />
      <Col className={styles.content}>
        <p>Idea Portal</p>
        <hr />
      </Col>
      <Col>
        <span>
          {" "}
          <FaArrowCircleRight size={20} className="mb-1" />
        </span>
      </Col>
    </Row>
  );
};

export default ExploreCard;
