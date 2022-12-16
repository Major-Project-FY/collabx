import React from "react";

import { Form } from "react-bootstrap";
import styles from "./Profile.module.css";

const BasicDetails = () => {
  return (
    <Form className={styles["prjects-form"]}>
      <div className={styles["input-group"]}>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">Username</Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter Unique Username"
            type="text"
          />
        </Form.Group>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">First Name</Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter First Name"
            type="text"
          />
        </Form.Group>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">Last Name</Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter Last Name"
            type="text"
          />
        </Form.Group>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">
            Email Address
          </Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter email address"
            type="email"
          />
        </Form.Group>
      </div>
      <Form.Group className={styles["input-area"]}>
        <Form.Label className="text-muted ms-2 small">Bio</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          className="p-0 px-2 py-1"
          placeholder="A breif description of yourself"
          type="text"
        />
      </Form.Group>
    </Form>
  );
};

export default BasicDetails;
