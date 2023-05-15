/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import { Row, Col, Image as BImage } from "react-bootstrap";
import styles from "./PrblmPostCard.module.css";
import Button from "../../UI/Button/Button";
import { getRandomColor } from "../../utils/getRandomColor";
import { BsThreeDots } from "react-icons/bs";

const PrblmPostCard = ({ statement, name, urls }) => {
  // console.log(name.split(" "))
  const [initals, setInitals] = useState("");

  useEffect(() => {
    if (name?.split(" ").length === 1) {
      let fname = name?.split(" ")[0];
      setInitals(fname[0]);
    } else {
      let fname = name?.split(" ")[0];
      let lname = name?.split(" ")[1];
      setInitals(fname[0] + lname[0]);
    }
  }, [name]);

  return (
    <Card>
      <Row className="d-flex align-items-start justify-content-start">
        <Col md={2} sm={2} xs={2} className={styles["profile-image"]}>
          <div
            style={{ backgroundColor: `${getRandomColor()}` }}
            className={styles["dummy-img"]}
          >
            {initals}
            {/* {name.slice(0)[0] + name?.split(" ")[1] ? name?.split(" ")[1][0] : "" } */}
          </div>
        </Col>
        <Col md={8} sm={7} xs={8} className={styles["profile-description"]}>
          <div className={styles.content}>
            <h4>{name}</h4>
            {/* <p className={`${styles["content-time"]} text-muted`}>3 hrs</p> */}
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
            {/* <h6>{title}</h6> */}
            <p>{statement}</p>

            <div className="d-flex align-items-center justify-content-between">
              <p>
                Reference links :{" "}
                <span>
                  {urls.length === 1 ? (
                    <a key={key} className="text-primary" href={urls[0]}>
                      {urls[0]}
                    </a>
                  ) : (
                    urls.map((i, key) => {
                      return (
                        <a
                          key={key}
                          className="text-primary"
                          rel="noreferrer"
                          target="_blank"
                          href={i}
                        >
                          <br /> {i}
                        </a>
                      );
                    })
                  )}
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

export default PrblmPostCard;
