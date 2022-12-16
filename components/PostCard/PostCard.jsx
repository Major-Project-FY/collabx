/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../UI/Card/Card";
import { Row, Col, Image as BImage } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import {
  FaRegThumbsUp,
  FaRegCommentDots,
  FaRegShareSquare,
} from "react-icons/fa";

import styles from "./PostCard.module.css";

const DUMMYIMG =
  "https://media-exp1.licdn.com/dms/image/C5603AQFqtgKogKTQ7w/profile-displayphoto-shrink_800_800/0/1645511337667?e=1672876800&v=beta&t=gedFGWqfbphDuffEaEoVYL2MxYSzsprE5MlYRM1QPqA";
const PostCard = () => {
  return (
    <Card>
      <Row className="d-flex align-items-start justify-content-start">
        <Col md={2} sm={2} xs={2} className={styles["profile-image"]}>
          <BImage roundedCircle src={DUMMYIMG} alt="img" />
        </Col>
        <Col md={8} sm={7} xs={8} className={styles["profile-description"]}>
          <div className={styles.content}>
            <h4>Mayuresh Shinde</h4>
            <p>Backend Developer and Open Source Enthusiast</p>
            <p className={`${styles["content-time"]} text-muted`}>3 hrs</p>
          </div>
        </Col>
        <Col
          md={2}
          sm={3}
          xs={2}
          className={`${styles["three-dots"]} d-flex align-items-center justify-content-end`}
        >
          <span>
            <BsThreeDots size={20} />
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.description}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <span className="text-muted">8 Likes . 5 Comments</span>
            <hr />
          </div>
          <div className={styles["interaction-icons"]}>
            <span>
              <FaRegThumbsUp className="mb-1" /> Like
            </span>
            <span>
              <FaRegCommentDots className="mb-1" /> Comment
            </span>
            <span>
              <FaRegShareSquare className="mb-1" /> Share
            </span>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default PostCard;
