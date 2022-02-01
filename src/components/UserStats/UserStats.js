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

  return (
    <div>
      <div>
        <h3>Stats</h3>
        <hr />
        <div className="container">
          <div className="row  " style={{ marginBottom: 150, marginTop: 50 }}>
            <div className="col-md-6 mx-auto border border-primary rounded p-5">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username: {userMetrics.username}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Correct answered question count</td>
                    <td>{userMetrics.correct_question_count}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Wrong answered question count</td>
                    <td>{userMetrics.wrong_question_count}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Learned word count</td>
                    <td>{userMetrics.learned_word_count}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
