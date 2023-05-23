import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BsCamera } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import axios from "axios";
import Select from "react-select";
// import styles from "./CreatePost.module.css";
import Toast from "../../UI/Toast/Toast";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Config from "../../config";

const CreatePrblmPost = () => {
  const [showErr, setShowErr] = useState(false);
  const { register, handleSubmit } = useForm();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [options, setOptions] = useState([]);

  const fetchSkills = async (inputValue) => {
    try {
      const response = await axios.get(
        `${Config.root + Config.user.listSkills}query?q=${inputValue}`,
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      const skillsData = data.map((item) => ({
        value: item.skillID,
        label: item.skill,
      }));
      setOptions(skillsData);

      console.log("data", data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const handleSkillsChange = (selectedOptions) => {
    console.log("selectd option", selectedOptions);
    const selectedSkill = selectedOptions.map((option) => option);
    setSelectedSkills(selectedSkill);
  };

  const onSubmit = async (data) => {
    const { urls, ...rest } = data;

    const postData = {
      ...rest,
      urls: urls.split(","),
    };

    try {
      var config = {
        method: "post",
        url: `${Config.root + Config.statement.createNew}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: postData,
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

  useEffect(() => {
    fetchSkills();
  }, []);

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col className="d-flex align-items-center justify-content-start">
                <span className="text-muted">
                  {" "}
                  <FaEdit size={20} className="mb-1 me-2" /> Publish a problem
                  statement
                </span>
              </Col>
            </Row>
            <br />
            <Form.Group className="mb-2">
              <Form.Control
                {...register("problemStatement", { required: true })}
                placeholder="Problem statement description"
                type="text"
                as="textarea"
                rows={5}
              />
            </Form.Group>
            <Select
              options={options}
              isMulti
              value={selectedSkills}
              placeholder="Select skills required"
              // onInputChange={fetchSkills}
              onChange={handleSkillsChange}
            />

            <div>Selected Skills:</div>
            <ul>
              {selectedSkills.map((item) => (
                <li key={item.skillID}>{item.skill}</li>
              ))}
            </ul>
            <Form.Group className="mb-4">
              <Form.Control
                {...register("urls", { required: true })}
                placeholder="Reference links"
                type="text"
              />
            </Form.Group>
            <Button responsive>Post</Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default CreatePrblmPost;
