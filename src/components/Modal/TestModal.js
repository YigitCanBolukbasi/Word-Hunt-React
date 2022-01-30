import React, { useState } from "react";

function TestModal() {
  const [test, setTest] = useState("please select the meaningful option ");
  return (
    <div>
      <div class="alert alert-info mt-4" role="alert">
        if you want to fix your words!Please click to{" "}
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Launch!
        </button>
      </div>

      <div
        class="modal fade mt-4 p-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                A little test for you
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h5>{test}</h5>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-2 p-1">
                    <button class="btn btn-info w-100" type="button">
                      Button
                    </button>
                  </div>
                  <div className="col-md-12 mt-2 p-1">
                    <button class="btn btn-info w-100" type="button">
                      Button
                    </button>
                  </div>
                  <div className="col-md-12 mt-2 p-1">
                    <button class="btn btn-info w-100" type="button">
                      Button
                    </button>
                  </div>
                </div>
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
                Send To test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestModal;
