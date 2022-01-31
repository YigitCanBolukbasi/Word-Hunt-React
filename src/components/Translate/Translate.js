import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axios";

const Translate = () => {
  const [fromLanguage, setFromLanguage] = useState("en");
  const [translation, setTranslation] = useState("");
  const [word, setWord] = useState("");
  const [addWord, setAddWord] = useState(false);

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
      .catch(() => {
        toast.error("An error occured");
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row mx-auto mt-5">
          <h3>Translate</h3>
          <hr />
          <div
            className="col-md-2 col-sm-2 col-lg-2 col-2 pt-3 bg-primary"
            style={{ borderTopLeftRadius: 7 }}
          >
            <div className="container-select">
              <select
                onChange={(e) => setFromLanguage(e.target.value)}
                className="form-select"
                aria-label="Default select example"
                value={fromLanguage}
              >
                <option value="tr">Turkish</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-4 col-4 bg-primary"></div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-2 pt-3 bg-dark">
            <div className="container-select">
              <select
                onChange={(e) => setFromLanguage(e.target.value)}
                class="form-select"
                aria-label="Default select example"
                value={fromLanguage === "tr" ? "en" : "tr"}
                disabled
              >
                <option value="tr">Turkish</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-4 col-lg-4 col-4 bg-dark d-flex justify-content-end"
            style={{ borderTopRightRadius: 7 }}
          >
            {addWord && (
              <button
                type="button"
                className="btn btn-md btn-primary mt-3"
                onClick={handleSaveWord}
              >
                Kelimeyi Kaydet
              </button>
            )}
          </div>
        </div>
        <div className="row mx-auto" style={{ height: 70 }}>
          <div
            className="col-md-6 col-lg-6 col-sm-6 col-6   bg-primary"
            style={{ borderBottomLeftRadius: 7 }}
          >
            <div className="form-floating mt-4">
              <input
                style={{ height: 40, padding: "5px" }}
                type="email"
                className="form-control"
                id="floatingInputGrid"
                value={word}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-sm-6 col-6  bg-dark "
            style={{ borderBottomRightRadius: 7 }}
          >
            <div className="form-floating mt-4">
              <input
                style={{ height: 40, padding: "5px" }}
                type="email"
                className="form-control mb-3"
                id="floatingInputGrid"
                value={translation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
