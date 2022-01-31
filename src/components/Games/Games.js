import React from "react";
import TestModal from "../../components/Modal/TestModal";
import LetterModal from "../../components/Modal/LetterModal";

const Games = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-12 mt-5 ">
            <h3>Games</h3>
          </div>
        </div>
        <hr />
        <p>Please translate and add minimum 3 words before starting games </p>
        <div className="row my-5">
          <div className="col-md-6 col-lg-6 col-sm-6 col-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Select The Correct One</h5>
                <p className="card-text">
                  Choose the correct answer translation. All the words you will
                  see are from the words you have already added
                </p>
                <TestModal />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 col-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fix The Word</h5>
                <p className="card-text">
                  We have shuffled the letters of a random word from your words.
                  You should correct the word.
                </p>
                <LetterModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
