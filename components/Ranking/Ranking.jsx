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
        <h5>Languages</h5>
        {username && (
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`}
            alt="lang-used"
          />
        )}
      </div>
      <div>
        <h5>Your Stats</h5>
        {username && (
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en`}
            alt="lang-used"
          />
        )}
      </div>
      <div>
        <h5>Your overall rank</h5>
        <h3>
          <Badge bg="success">{rank}</Badge>
        </h3>
      </div>
    </div>
  );
};

export default Ranking;
