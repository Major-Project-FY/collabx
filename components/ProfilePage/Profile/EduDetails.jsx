import React from "react";

import { Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Button from "../../../UI/Button/Button";

import styles from "./Profile.module.css";

const EduDetails = () => {
  return (
    <Form className={styles["prjects-form"]}>
      <div className={styles["input-group"]}>
        <Form.Group className={styles["input-area"]}>
          {/* <Form.Label className="text-muted ms-2 small"></Form.Label> */}
          <Form.Select className="p-0 px-2 py-1" type="text">
            <option defaultChecked value="Qualification">
              Qualification
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className={styles["input-area"]}>
          <Form.Select className="p-0 px-2 py-1" type="text">
            <option defaultChecked value="Board">
              Board/Degree
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">
            School/College Name
          </Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter name of your School/College"
            type="text"
          />
        </Form.Group>
        <Form.Group className={styles["input-area"]}>
          <Form.Label className="text-muted ms-2 small">
            Percentage/CGPA
          </Form.Label>
          <Form.Control
            className="p-0 px-2 py-1"
            placeholder="Enter your commulative score"
            type="text"
          />
        </Form.Group>
      </div>

      <div className={styles["add-button"]}>
        <Button lightBg><FaPlus  className="mb-1 me-1" /> Add new</Button>
      </div>
    </Form>
  );
};

export default EduDetails;
