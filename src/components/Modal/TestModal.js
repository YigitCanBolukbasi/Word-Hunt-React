import React, { useState } from "react";
import axiosInstance from "../../utils/axios";
import { toast } from "react-toastify";

function TestModal() {
  const [question, setQuestion] = useState("");
  const [questionID, setQuestionID] = useState("");
  const [words, setWords] = useState([]);
  const [answerid, setAnswerid] = useState();
  const [correctColor, setCorrectColor] = useState(false);
  const [falseColor, setFalseColor] = useState(false);

  function getQuestion() {
    axiosInstance
      .post("/api/v1/questions", {
        question_type: "multiple_choice",
      })
      .then((response) => {
        if (response.status === 200) {
          let data = response.data;
          let words_array = [];
          words_array.push(data.correct_word);
          words_array.push(data.first_random_word);
          words_array.push(data.second_random_word);
          words_array = words_array.sort(() => Math.random() - 0.5);
          setWords(words_array);
          setQuestion(data.correct_word.en);
          setQuestionID(data.id);
          setAnswerid(data.correct_word.id);
        }
      });
  }

  function submitQuestion(word_id) {
    axiosInstance
      .post(`/api/v1/questions/${questionID}/check`, {
        word_id: word_id,
      })
      .then((response) => {
        if (response.data.answer == "correct") {
          toast.success("Congrats!!");
          setCorrectColor(true);
        } else {
          toast.warn("Upss!!");
          setFalseColor(true);
        }
      });
  }

  const modalClose = () => {
    setFalseColor(false);
    setCorrectColor(false);
  };

  const setColor = (word) => {
    if (correctColor && answerid === word.id) {
      return "btn btn-success w-100";
    } else if (falseColor) {
      if (answerid === word.id) {
        return "btn btn-success w-100";
      } else {
        return "btn btn-danger w-100";
      }
    } else {
      if (correctColor) {
        return "btn btn-danger w-100";
      } else {
        return "btn btn-info w-100";
      }
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={getQuestion}>
        Launch!
      </button>

      <div
        className="modal fade mt-4 p-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Select the correct one
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5>{question}</h5>
              <div className="container">
                <div className="row">
                  {words.map((word) => {
                    return (
                      <div className="col-md-12 mt-2 p-1" key={word?.id}>
                        <button
                          id={word?.id}
                          className={setColor(word)}
                          type="button"
                          onClick={() => submitQuestion(word.id)}>
                          {word?.tr}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={modalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestModal;
