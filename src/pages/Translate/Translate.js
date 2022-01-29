import React, { useState } from "react";

function Translate() {
  const [targetLanguage, setTargetLanguage] = useState("");
  const [word, setWord] = useState("");
  console.log("word   :", word);
  return (
    <div className="container">
      <div className="row mx-auto mt-5">
        <div
          className="col-md-2 pt-3 bg-primary"
          style={{ borderTopLeftRadius: 7 }}>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Choose Language
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Turkish
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  English
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 bg-primary"></div>
        <div
          className="col-md-6 bg-dark"
          style={{ borderTopRightRadius: 7 }}></div>
      </div>
      <div className="row mx-auto" style={{ height: 100 }}>
        <div
          className="col-md-6   bg-primary"
          style={{ borderBottomLeftRadius: 7 }}>
          <div class="form-floating mt-4">
            <input
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
              type="email"
              class="form-control"
              id="floatingInputGrid"
              value={"word"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translate;
