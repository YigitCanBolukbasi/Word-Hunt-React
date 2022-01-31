import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import axiosInstance from "../../utils/axios";

import TestModal from "../../components/Modal/TestModal";
import LetterModal from "../../components/Modal/LetterModal";
import UserStats from "../../components/UserStats/UserStats";

function Translate() {
  const [fromLanguage, setFromLanguage] = useState("en");
  const [translation, setTranslation] = useState("");
  const [word, setWord] = useState("");
  const [addWord, setAddWord] = useState(false);

  function handleSaveWord() {
    const body = {};
    body[fromLanguage] = word;

    axiosInstance
      .post("/api/v1/words", body)
      .then((response) => {
        if (response.status === 201) {
          setWord("");
          toast.success("Word saved successfully!");
        } else {
          toast.error("An error occured");
        }
      })
      .catch((error) => {
        toast.error("An error occured");
      });
  }

  useEffect(() => {
    if (word.length > 0) {
      setAddWord(true);
    } else {
      setAddWord(false);
    }
    const delay = setTimeout(() => {
      const translation = {
        q: word,
        from: fromLanguage,
        to: fromLanguage === "tr" ? "en" : "tr",
      };
      axiosInstance
        .get(
          `api/v1/translate?q=${translation.q}&from=${translation.from}&to=${translation.to}`
        )
        .then((response) => {
          if (response.status == 200) {
            setTranslation(response.data.translated_text);
          }
        });
    }, 250);

    return () => clearTimeout(delay);
  }, [word]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4 ">
            <h3>Translate</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row mx-auto mt-5">
          <div
            className="col-md-2 pt-3 bg-primary"
            style={{ borderTopLeftRadius: 7 }}>
            <div className="container-select">
              <select
                onChange={(e) => setFromLanguage(e.target.value)}
                class="form-select"
                aria-label="Default select example"
                value={fromLanguage}>
                <option value="tr">Türkçe</option>
                <option value="en">İngilizce</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 bg-primary"></div>
          <div className="col-md-2 pt-3 bg-dark">
            <div className="container-select">
              <select
                onChange={(e) => setFromLanguage(e.target.value)}
                class="form-select"
                aria-label="Default select example"
                value={fromLanguage === "tr" ? "en" : "tr"}
                disabled>
                <option value="tr">Türkçe</option>
                <option value="en">İngilizce</option>
              </select>
            </div>
          </div>
          <div
            className="col-md-4 bg-dark d-flex justify-content-end"
            style={{ borderTopRightRadius: 7 }}>
            {addWord && (
              <button
                type="button"
                className="btn btn-md btn-primary mt-3"
                onClick={handleSaveWord}>
                Kelimeyi Kaydet
              </button>
            )}
          </div>
        </div>
        <div className="row mx-auto" style={{ height: 70 }}>
          <div
            className="col-md-6   bg-primary"
            style={{ borderBottomLeftRadius: 7 }}>
            <div class="form-floating mt-4">
              <input
                style={{ height: 40, padding: "5px" }}
                type="email"
                class="form-control"
                id="floatingInputGrid"
                value={word}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="col-md-6  bg-dark "
            style={{ borderBottomRightRadius: 7 }}>
            <div class="form-floating mt-4">
              <input
                style={{ height: 40, padding: "5px" }}
                type="email"
                class="form-control mb-3"
                id="floatingInputGrid"
                value={translation}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 ">
            <h3>Games</h3>
          </div>
        </div>
        <hr />
        <p>Please translate a few words before starting the game </p>
        <div className="row my-5">
          <div className="col-md-6 mx-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Select The Correct One</h5>
                <p class="card-text">
                  Choose the correct answer translation. All the words you will
                  see are from the words you have already added
                </p>
                <TestModal />
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Fix The Word</h5>
                <p class="card-text">
                  We have shuffled the letters of a random word from your words.
                  You should correct the word.
                </p>
                <LetterModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserStats />

      <footer class="page-footer  bg-dark">
        <div className="row">
          <div className="col-md-12 p-3 dark">
            <span style={{ display: "block", marginBottom: 6 }}>
              {" "}
              Git Hub profiles:
            </span>
            <span style={{ display: "block", marginBottom: 6 }}>
              <a
                className="text-light"
                href="https://github.com/YigitCanBolukbasi">
                https://github.com/YigitCanBolukbasi
              </a>
            </span>
            <span style={{ display: "block", marginBottom: 6 }}>
              <a className="text-light" href="https://github.com/sezeristif">
                https://github.com/sezeristif
              </a>
            </span>
          </div>
        </div>

        <div class=" py-3 text-dark bg-primary">
          © 2020 Copyright :{" "}
          <a
            className="text-light"
            href="https://damp-reaches-91415.herokuapp.com/login">
            www.wordhunt.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Translate;
