import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsCamera } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import axios from "axios";
import styles from "./CreatePost.module.css";
import Toast from "../../UI/Toast/Toast";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Config from "../../config";

const CreatePost = () => {
  const [showErr, setShowErr] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // postData(...postData, [data]);
    const { link, ...rest } = data;

    const postData = {
      ...rest,
      links: [link],
    };

    console.log(postData);

    try {
      var config = {
        method: "post",
        url: `${Config.root + Config.post.createNew}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
        withCredentials: true,
      };
      const result = await axios(config);
      console.log("create post result", result);
      if (result.status === 200) {
        window.location.reload();
        // postData([...postData, data]);
      }
    } catch (error) {
      setShowErr(true);
    }
  };

  return (
    <Card>
      <Toast
        toggleShow={showErr}
        show={showErr}
        title="Alert"
        message="Something went wrong."
        bg="light"
      />
      <Row>
        <Col md={12}>
          {" "}
          <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Row>
              <Col className="d-flex align-items-center justify-content-start">
                <span className="text-muted">
                  {" "}
                  <FaEdit size={20} className="mb-1 me-2" /> Publish a post
                </span>
              </Col>

              {/* <Col className="d-flex align-items-center justify-content-end">
          <Button lightBg={true}>Share</Button>
        </Col> */}
            </Row>
            <br />
            <Form.Group className="mb-2">
              <Form.Control
                {...register("title", { required: true })}
                placeholder="Post Title"
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Control
                {...register("link", { required: true })}
                placeholder="Project link"
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control
                {...register("description", { required: true })}
                placeholder="Post description"
                type="text"
                as="textarea"
                rows={5}
              />
            </Form.Group>

            {/* <p className="text-decoration-underline text-center">
                Forget your password?
              </p> */}

            <Button responsive>Share</Button>
          </Form>
        </Col>
        <Col md={2} className="d-flex align-items-start justify-content-end">
          <span>{/* <BsCamera size={25} /> */}</span>
        </Col>
      </Row>

      {/* <Row>
        <Col className="d-flex align-items-center justify-content-start">
          <span className="text-muted">
            {" "}
            <FaEdit size={20} className="mb-1 me-2" /> Publish a post
          </span>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <Button lightBg={true}>Share</Button>
        </Col>
      </Row> */}
    </Card>
  );
};

export default CreatePost;
