import React, { useState } from "react";
import items from "../data.json"
import { button_name } from "../constants/constants";
import { useAppContext } from "../context/AppContext";
import { asd, des } from "../service/helpers";

function ButtonGroupCom() {
  const { data, setData, setEndingDate, setStartingDate } = useAppContext();
  const [activeButton, setActiveButton] = useState(null)
  const [buttonState, setButtonState] = useState({
    friends: "",
    influence: "",
    chirpiness: "",
  });

  function handleChange(item) {
    const sortFun = buttonState[item] === "asd" ? asd : des;
    const temp = [...data];
    temp.sort((a, b) => sortFun(a.twubric[item], b.twubric[item]));
    setData(temp);
    setButtonState((prev) => ({
      ...prev,
      [item]: prev[item] === "asd" ? "des" : "asd",
    }));
    setActiveButton(item)
  }

  function removeAllFilters() {
    setData([...items])
    setActiveButton(null)
    setStartingDate("")
    setEndingDate("")
    setButtonState({
      friends: "",
      influence: "",
      chirpiness: "",
    })
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-2 my-3">
        <h3 className="text-xl font-semibold">Sort By</h3>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <p className="font-semibold">Twubric score: </p>
          {button_name.map((item, index) => (
            <button
              key={index}
              className="button bg-slate-200 text-black hover:shadow hover:bg-slate-300"
              onClick={() => handleChange(item)}
              disabled={activeButton && activeButton !== item}
            >
              <span>{item} </span>
              <span>
                {buttonState[item] === "asd"
                  ? "⬇️"
                  : buttonState[item] === "des"
                    ? "⬆️"
                    : ""}
              </span>
            </button>
          ))}
          <button className="button bg-red-500 hover:bg-red-600 text-white hover:shadow" onClick={removeAllFilters}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonGroupCom;