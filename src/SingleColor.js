import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const backgroundColor = rgb.join(",");
  const hexColorValue = `#${hexColor}`;

  const changeAlert = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColorValue);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
      return () => clearTimeout(timeOut);
    }, 5000);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${backgroundColor})` }}
      onClick={changeAlert}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColorValue}</p>
      {alert && (
        <p
          className={`${index > 10 ? "clipboard" : null} `}
          style={{ textAlign: "center" }}
        >
          Copied To Clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
