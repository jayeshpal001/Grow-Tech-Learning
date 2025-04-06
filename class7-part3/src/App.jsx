import React, { createContext, useEffect, useState } from 'react'
import { ChildB } from './component/ChildB';
export const apiContext = createContext();
const App = () => {
  const api = "https://codehelp-apis.vercel.app/api/get-top-courses";
 

  const [data, setData] = useState([])
  useEffect(() => {

    async function apiFetch() {
      try {
        const response = await fetch(api);
        const ans = await response.json();
        setData(ans?.data?.Business);  
      } catch (err) {
        console.log("getting an error ", err);
      }
  
     
    }
    apiFetch();
}, [])
  
console.log(data);

  return (
    <div>

      <apiContext.Provider value={{data,setData}}>
      <ChildB/>
      </apiContext.Provider>

    </div>
  )
}

export default App