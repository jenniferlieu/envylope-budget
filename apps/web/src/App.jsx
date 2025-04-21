import { useEffect, useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "@/styles/App.css";
import { getAllAccounts } from "@/services/accountApi";
import useDataContext from "@/hooks/useDataContext";

function App() {
  const [count, setCount] = useState(0);
  const { data, updateData } = useDataContext();

  useEffect(() => {
    getAllAccounts()
      .then((data) => {
        console.log("getAllAccounts data", data.message);
        updateData({ accountsList: data.message });
      })
      .catch((err) => console.error("Failed to fetch all accounts", err));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-500">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        Get all accounts:{" "}
        {data.accountsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </>
  );
}

export default App;
