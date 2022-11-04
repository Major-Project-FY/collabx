import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsCamera } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import styles from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <Card>
      <Row>
          <Col md={10}>
            {" "}
            <p>Share an project, article or post</p>
          </Col>
          <Col md={2} className="d-flex align-items-start justify-content-end">
            <span>
              <BsCamera size={25} />
            </span>
          </Col>
      </Row>
      <div className={styles["line"]}>
        <hr />
      </div>
      <Row>
        <Col  className="d-flex align-items-center justify-content-start">
            <span className="text-muted"> <FaEdit size={20} className="mb-1 me-2"/> Publish a post</span>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
            <Button lightBg={true}>Share</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CreatePost;
