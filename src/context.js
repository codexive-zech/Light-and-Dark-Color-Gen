import React, { useState, useContext, useEffect } from "react";
import Values from "values.js";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [colorValue, setColorValue] = useState("");
  const [colorList, setColorList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleColorSubmit = (e) => {
    e.preventDefault();
    try {
      const colorNewValue = new Values(colorValue).all(10);
      setColorList(colorNewValue);
      setColorValue("");
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorMsg(true);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setErrorMsg(false);
      setIsError(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [errorMsg, isError]);

  return (
    <AppContext.Provider
      value={{
        colorValue,
        colorList,
        setColorValue,
        handleColorSubmit,
        isError,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
