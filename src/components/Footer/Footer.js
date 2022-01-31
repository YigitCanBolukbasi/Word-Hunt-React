import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className=" w-100  bg-dark mt-5"
        style={{ position: "fixed", bottom: 0 }}
      >
        <div className=" py-3 text-dark bg-primary">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              className="text-light"
              style={{
                marginLeft: 10,
              }}
            >
              {" "}
              Created By:
            </span>
            <span
              style={{
                marginLeft: 10,
              }}
            >
              <a
                className="text-light"
                href="https://www.linkedin.com/in/yi%C4%9Fit-can-b%C3%B6l%C3%BCkba%C5%9F%C4%B1-669218209/"
              >
                Yiğit Can Bölükbaşı
              </a>
            </span>
            <span
              style={{
                marginLeft: 10,
              }}
            >
              <a
                className="text-light"
                href="https://www.linkedin.com/in/sezer-istif/"
              >
                Sezer İstif
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
