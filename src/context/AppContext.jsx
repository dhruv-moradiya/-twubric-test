import { createContext, useContext, useState } from "react";
import items from "../data.json";
const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [data, setData] = useState([...items]);
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        endingDate,
        setEndingDate,
        startingDate,
        setStartingDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
