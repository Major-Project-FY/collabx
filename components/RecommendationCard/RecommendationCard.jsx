import React from "react";
import Card from "../../UI/Card/Card";
import { Row, Col, Image as BImage } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from "./RecommendationCard.module.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // Check if the color is dark or light
  var r = parseInt(color.slice(1, 3), 16);
  var g = parseInt(color.slice(3, 5), 16);
  var b = parseInt(color.slice(5, 7), 16);
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;
  if (brightness < 128) {
    // If the color is too dark, make it lighter
    color = lighten(color, 30);
  }
  return color;
}

function lighten(color, percent) {
  var num = parseInt(color.slice(1), 16);
  var amt = Math.round(2.55 * percent);
  var R = (num >> 16) + amt;
  var G = (num >> 8 & 0x00FF) + amt;
  var B = (num & 0x0000FF) + amt;
  var newColor = "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  return newColor;
}

const DUMMY =
  "https://yt3.googleusercontent.com/ytc/AL5GRJXcrhueXxa0kujKj2igxeT9S0ZFbgMxaXtXtZv8QQ=s176-c-k-c0x00ffffff-no-rj";

const RecommendationCard = ({
  firstName,
  lastName,
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
