import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axiosInstance from "../../utils/axios";

const UserStats = () => {
  const [userMetrics, setUserMetrics] = useState({});

  useEffect(() => {
    axiosInstance.get("/api/v1/users/me").then((response) => {
      setUserMetrics(response.data);
    });
  }, []);

  return <div>{userMetrics.correct_question_count}</div>;
};

export default UserStats;
