import { createContext, useEffect, useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
export const apiContext = createContext();

function App() {
  const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";
  const [data, setData] = useState([]);
  async function callApi() {
    try {
      const response = await fetch(apiUrl);
      const ans = await response.json();
      console.log("Data got from an API", ans);
      setData(ans?.data);
    } catch (err) {
      console.log("getting an error ", err);
    }
  }

  useEffect(() => {
    callApi();
  }, []);
  console.log("data me data", data);
  return (
    <>
      <apiContext.Provider value={data}>
        <Child1 />
        {/* <Child2 />
        <Child3 /> */}
      </apiContext.Provider>
    </>
  );
}

export default App;
