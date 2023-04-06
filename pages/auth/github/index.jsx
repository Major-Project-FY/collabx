import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../../UI/Button/Button";
import Toast from "../../../UI/Toast/Toast";

const BACKENDGITHUB = "https://colabx-backend-dev.onrender.com/auth/github";

const GithubLogin = () => {
  const [githubURL, setGithubURL] = useState(null);
  const [showErr, setShowErr] = useState(false);
  const router = useRouter();

  const loginWithGithub = async () => {
    try {
      var config = {
        method: "get",
        // url: "http://ec2-35-173-200-23.compute-1.amazonaws.com/auth/github",
        withCredentials: true,
        url: "https://colabx-backend-dev.onrender.com/auth/github",
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-credentials": true,
        },
        withCredentials: true,
      };
      const result = await axios(config);

      // const result = await axios.get(BACKENDGITHUB, {
      //   withCredentials: true,
      // });

      if (result.status === 200) {
        setGithubURL(result.data.url);
      }
    } catch (error) {
      setShowErr(true);
      console.log(error); //remove
    }
  };

  useEffect(() => {
    if (githubURL) {
      router.push(githubURL);
    }
  }, [githubURL]);

  return (
    <div>
      <Toast
        toggleShow={showErr}
        show={showErr}
        title="Alert"
        message="Something went wrong!"
        bg="light"
      />
      <Button responsive onClick={loginWithGithub}>
        <FaGithub size="20" className="mb-1" color="#EFEFF1" /> GitHub
      </Button>
    </div>
  );
};

export default GithubLogin;
