import { useState, useEffect } from "react";
function useApi() {
    const apiUrl = "https://free-food-menus-api-two.vercel.app/bbqs"
    const [data, setData] = useState();
   
    const [loader, setLoader] = useState(true);
    async function getData() {
        try {
            setLoader(true);
            const response = await fetch(apiUrl);
            const ans = await response.json();
            console.log("The got from the api", ans)
            setData(ans);
            setLoader(false)
        }
        catch (error) {
            console.log("Data to nhi aaya eske karan", error)
            setLoader(false)
        }
    }
    useEffect(() => {
        getData();
    }, [])


    return { data, loader, getData }
}

export default useApi;
