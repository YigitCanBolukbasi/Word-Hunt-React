import React, { useState } from "react";

function LetterModal() {
  const [letter, setLetter] = useState("");
  console.log(letter);
  return (
    <div>
      <button
        type="button"
        class="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1">
        Fix to your words!
      </button>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Fix the word
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h4>
                You already learned this word, we just want you to edit it.
              </h4>
              <div className="row mt-5">
                <div
                  className="col-md-5 bg-primary mx-auto d-flex align-items-center"
                  style={{
                    height: 130,
                    borderRadius: 7,
                    borderStyle: "solid",
                    borderWidth: 1,
                  }}>
                  <span className="text-light ">holle wrlod</span>
                </div>
                <div
                  className="col-md-5 bg-primary mx-auto d-flex align-items-center"
                  style={{
                    height: 130,
                    borderRadius: 7,
                    borderStyle: "solid",
                    borderWidth: 1,
                  }}>
                  <span className="text-light">hello world</span>
                </div>
              </div>
              <div className="mt-5">
                <input
                  className="form-control"
                  value={letter}
                  onChange={(e) => setLetter(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterModal;
