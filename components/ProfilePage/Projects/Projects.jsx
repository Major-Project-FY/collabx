import React from 'react'

import { Form } from "react-bootstrap";
import Button from '../../../UI/Button/Button';
import { FaPlus, FaUpload } from 'react-icons/fa';

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Form className={styles["prjects-form"]}>
    <Form.Group className={styles["input-area"]}>
      <Form.Label className="text-muted ms-2 small">
        Topic
      </Form.Label>
      <Form.Control
        className="p-0 px-2 py-1"
        placeholder="Enter your project name/title"
        type="text"
      />
    </Form.Group>
    <Form.Group className={styles["input-area"]}>
      <Form.Label className="text-muted ms-2 small">
        Project Link
      </Form.Label>
      <Form.Control
        className="p-0 px-2 py-1"
        placeholder="Provide the link of the prototype/website"
        type="url"
      />
    </Form.Group>
    <Form.Group className={styles["input-area"]}>
      <Form.Label className="text-muted ms-2 small">
        Skills Used
      </Form.Label>
      <Form.Control
        className="p-0 px-2 py-1"
        placeholder="Skills/Technologies used in the project"
        type="text"
      />
    </Form.Group>
    <Form.Group className={styles["input-area"]}>
      <Form.Label className="text-muted ms-2 small">
        Summary
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        className="p-0 px-2 py-1"
        placeholder="A breif descrition of your project"
        type="text"
      />
    </Form.Group>
    <Form.Group className={styles["input-area"]}>
      <Form.Label className="text-muted ms-2 small">
        Images/Videos
      </Form.Label>
      <Form.Control
        className="p-0 px-2 py-1"
        placeholder={`${(<FaUpload />)} Upload Here`}
        type="file"
        accept="image/*, video/*"
      />
    </Form.Group>
    <div className={styles["project-add-btn"]}>
      <Button>
        <FaPlus className="mb-1 me-2" /> Add Project
      </Button>
    </div>
  </Form>
  )
}

export default Projects