import { createContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({
    accountsList: [],
  });

  function updateData(newData) {
    setData(newData);
  }

  return <DataContext.Provider value={{ data, updateData }}>{children}</DataContext.Provider>;
}

export { DataContext };
