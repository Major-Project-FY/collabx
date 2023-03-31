/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../UI/Card/Card";
import { Row, Col, Image as BImage } from "react-bootstrap";
import styles from "./PostCard.module.css";
import { FaUserAlt } from "react-icons/fa";
import Button from "../../UI/Button/Button";
const PostCard = ({ title, address, description, name, userName }) => {
  return (
    <Card>
      <Row className="d-flex align-items-start justify-content-start">
        <Col md={2} sm={2} xs={2} className={styles["profile-image"]}>
          <FaUserAlt size={35} className="ms-3 mt-1" />
        </Col>
        <Col md={8} sm={7} xs={8} className={styles["profile-description"]}>
          <div className={styles.content}>
            <h4>{name}</h4>
            <p>{userName}</p>
            {/* <p className={`${styles["content-time"]} text-muted`}>3 hrs</p> */}
          </div>
        </Col>
        <Col
          md={2}
          sm={3}
          xs={2}
          className={`${styles["three-dots"]} d-flex align-items-center justify-content-end`}
        >
          <span>{/* <BsThreeDots size={20} /> */}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.description}>
            <h6>{title}</h6>
            <p>{description}</p>

            <div className="d-flex align-items-center justify-content-between">
                <p>
                  You can find the project link{" "}
                  <span>
                    <a className="text-primary" href={address}>
                      {address}
                    </a>
                  </span>
                </p>
              <Button>Collab</Button>
            </div>

            {/* <span className="text-muted">8 Likes . 5 Comments</span> */}
            {/* <hr /> */}
          </div>
          {/* <div className={styles["interaction-icons"]}>
            <span>
              <FaRegThumbsUp className="mb-1" /> Like
            </span>
            <span>
              <FaRegCommentDots className="mb-1" /> Comment
            </span>
            <span>
              <FaRegShareSquare className="mb-1" /> Share
            </span>
          </div> */}
        </Col>
      </Row>
    </Card>
  );
};

export default PostCard;
