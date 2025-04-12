import useApi from "../hooks/useApi";
import Mycart from "../components/Mycart"
import Loader from "../components/Loader"
function Homepage({ cartData, setCartData }) {
    const { data, loader } = useApi();
    console.log("Home me data aa gya hai", data)

    return (<div className="flex flex-wrap items-center justify-center">
        {
            loader ? (<Loader />) : (data?.map((ele, index) => {
                return (<div key={index}><Mycart ele={ele} cartData={cartData} setCartData={setCartData} /></div>)
            }))
        }
    </div>)
}
export default Homepage;