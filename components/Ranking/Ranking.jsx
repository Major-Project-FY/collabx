import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "../../config";
import { Badge } from "react-bootstrap";

const Ranking = () => {
  const [rank, setRank] = useState("");

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
      <h3>
        <Badge bg="success">{rank}</Badge>
      </h3>
    </div>
  );
};

export default Ranking;
