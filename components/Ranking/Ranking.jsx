import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "../../config";
import { Badge, Image } from "react-bootstrap";

const Ranking = () => {
  const [rank, setRank] = useState("");
  const [username, setUsername] = useState("");
  
  const getRanking = async () => {
    var config = {
      method: "get",
      url: Config.root + Config.user.ranking,
      withCredentials: true,
    };

    axios(config)
      .then(function (response) {
        console.log("rank: ", JSON.stringify(response.data));
        setRank(response.data?.userLevel);
        setUsername(response.data?.gitHubUsername);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getRanking();
  }, []);
  return (
    <div>
      <div>
        <h6>Your overall rank</h6>
        <h3>
          <Badge bg="success">{rank}</Badge>
        </h3>
      </div>
      <br />
      <div>
      <h6>Your Top languages</h6>
        {username && (
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&hide_title=true&bg_color=efeef0`}
            alt="lang-used"
          />
        )}
      </div>
      <br />
      <div>
      <h6>Your GitHub stats</h6>
        {username && (
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${username}&hide_rank=true&hide_title=true&bg_color=efeef0`}
            alt="lang-used"
          />
        )}
      </div>
      {/* <br /> */}
    </div>
  );
};

export default Ranking;
