import React from "react";
import Card from "../../UI/Card/Card";
import { Row, Col, Image as BImage } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from "./RecommendationCard.module.css";
import { getRandomColor } from "../../utils/getRandomColor";


const RecommendationCard = ({
  firstName,
  lastName="",
  email
}) => {
  return (
    <Card>
      <Row>
        <Col
          md={10}
          sm={8}
          xs={10}
          className={styles["user-data"]}
        >
          {/* <BImage roundedCircle width={52} height={52} src={DUMMY} alt="dumy" /> */}
          <div style={{backgroundColor: `${getRandomColor()}`}} className={styles["dummy-img"]}>{firstName[0] + lastName[0]}</div>
          <div className={styles.content}>
            <h5>{firstName}{" "}{lastName}</h5>
            <p>{email}</p>
            {/* <p>Student</p> */}
          </div>
        </Col>
        <Col xs={2} sm={4} md={2} className={styles["follow-icon"]}>
          <span>
            <BsFillPlusCircleFill size={30} className="mb-1" />
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default RecommendationCard;
