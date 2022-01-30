import React, { useState } from "react";

import TestModal from "../../components/Modal/TestModal";
import LetterModal from "../../components/Modal/LetterModal";

function Translate() {
  const [targetLanguage, setTargetLanguage] = useState("");
  const [word, setWord] = useState("");
  console.log("value", targetLanguage);
  return (
    <div>
      <div className="container">
        <div className="row mx-auto mt-5">
          <div
            className="col-md-2 pt-3 bg-primary"
            style={{ borderTopLeftRadius: 7 }}>
            <div className="container-select">
              <select
                onChange={(e) => setTargetLanguage(e.target.value)}
                class="form-select"
                aria-label="Default select example"
                value={targetLanguage}>
                <option value="tr">Turkish</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 bg-primary"></div>
          <div className="col-md-2 pt-3 bg-dark">
            <div className="container-select">
              <select
                onChange={(e) => setTargetLanguage(e.target.value)}
                class="form-select"
                aria-label="Default select example"
                value={targetLanguage === "tr" ? "en" : "tr"}
                disabled>
                <option value="tr">Turkish</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <div
            className="col-md-4 bg-dark"
            style={{ borderTopRightRadius: 7 }}></div>
        </div>
        <div className="row mx-auto" style={{ height: 70 }}>
          <div
            className="col-md-6   bg-primary"
            style={{ borderBottomLeftRadius: 7 }}>
            <div class="form-floating mt-4">
              <input
                style={{ height: 40 }}
                type="email"
                class="form-control"
                id="floatingInputGrid"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </div>
          </div>
          <div
            className="col-md-6  bg-dark "
            style={{ borderBottomRightRadius: 7 }}>
            <div class="form-floating mt-4">
              <input
                style={{ height: 40 }}
                type="email"
                class="form-control mb-3"
                id="floatingInputGrid"
                value={"word"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mx-auto">
            <TestModal />
          </div>
          <div className="col-md-4 mx-auto">
            <LetterModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translate;
