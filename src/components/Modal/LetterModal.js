import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LetterModal() {
  const [answer, setAnswer] = useState("");
  const [randomizedWord, setRandomizedWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [questionID, setQuestionID] = useState("");

  function getQuestion() {
    axiosInstance
      .post("/api/v1/questions", {
        question_type: "correction",
      })
      .then((response) => {
        if (response.status === 200) {
          setRandomizedWord(response.data.wrong_string);
          setTranslation(response.data.correct_word.tr);
          setQuestionID(response.data.id);
        }
      });
  }

  function submitQuestion() {
    document.getElementById("modal-input").disabled = true;
    document.getElementById("submit-button").disabled = true;

    axiosInstance
      .post(`/api/v1/questions/${questionID}/check`, {
        answer_string: answer,
      })
      .then((response) => {
        if (response.data.answer == "correct") {
          toast.success("Congrats!!");
        } else {
          toast.warn("Wrong Answer");
        }
      });
  }

  function cleanUp() {
    setAnswer("");
    document.getElementById("modal-input").disabled = null;
    document.getElementById("submit-button").disabled = null;
  }

  return (
    <div id="letter-modal">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        onClick={getQuestion}>
        Launch!
      </button>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Fix the word
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h4>
                You already learned this word, we just want you to edit it.
              </h4>
              <div className="row mt-5">
                <div
                  className="col-md-5 col-lg-5 col-sm-5 col-5 bg-primary mx-auto d-flex align-items-center justify-content-around"
                  style={{
                    height: 60,
                    borderRadius: 7,
                    borderStyle: "solid",
                    borderWidth: 1,
                  }}>
                  <strong className="text-light">Translate:</strong>
                  <span className="text-light ">{translation}</span>
                </div>
                <div
                  className="col-md-5 col-lg-5 col-sm-5 col-5 bg-primary mx-auto d-flex align-items-center"
                  style={{
                    height: 60,
                    borderRadius: 7,
                    borderStyle: "solid",
                    borderWidth: 1,
                  }}>
                  <strong className="text-light">Randomized Word:</strong>
                  <span className="text-light">{randomizedWord}</span>
                </div>
              </div>
              <div className="mt-5">
                <input
                  className="form-control"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  id="modal-input"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={cleanUp}>
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitQuestion}
                id="submit-button"
                href="/">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterModal;
