import React from "react";
import { useGlobalContext } from "./context";
import SingleColor from "./SingleColor";

const Form = () => {
  const {
    colorValue,
    setColorValue,
    colorList,
    handleColorSubmit,
    isError,
    errorMsg,
  } = useGlobalContext();

  return (
    <div className="container">
      {errorMsg && <p className="wrong">Please Enter a Hex Color Value</p>}
      <form onSubmit={handleColorSubmit}>
        <div className="row-form">
          <input
            type="text"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            className={`${isError ? "error" : null}`}
            placeholder="e.g #ccc"
          />

          <button type="submit" className="btn">
            Generate Color
          </button>
        </div>
      </form>

      {/* display list */}
      {colorList.length > 0 && (
        <section className="colors">
          {colorList.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Form;
