import React from "react";

import { Form } from "react-bootstrap";
import Button from "../../../UI/Button/Button";
import { FaUpload, FaPlus } from "react-icons/fa";

import styles from "./Profile.module.css";

const WorkDetails = () => {
  return (
    <Form className={styles["prjects-form"]}>
      <div className={styles["input-group"]}>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">Designation</Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter the title of the certification"
            type="text"
          />
        </Form.Group>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">
            Organization name
          </Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Mention the skills you've gained"
            type="text"
          />
        </Form.Group>
      </div>
      <Form.Group className={styles["input-area"]}>
        <Form.Label className="text-muted ms-2 small">
          Key skills involved
        </Form.Label>
        <Form.Control
          className="p-0 px-2 py-1 flex-1"
          placeholder="Enter the title of the certification"
          type="text"
        />
      </Form.Group>
      <Form.Group className={styles["input-area"]}>
        <Form.Label className="text-muted ms-2 small">
          Upload certificate - images/pdfs
        </Form.Label>
        <Form.Control
          className="p-0 px-2 py-1"
          placeholder={`${(<FaUpload />)} Upload Here`}
          type="file"
          accept="image/*, pdf/*"
        />
      </Form.Group>
      <div className={styles["add-button"]}>
        <Button lightBg><FaPlus  className="mb-1 me-1" /> Add new</Button>
      </div>
    </Form>
  );
};

export default WorkDetails;
