import useApi from "../hooks/useApi";
function Mycart({ ele, setCartData, cartData }) {

    function cartHandler(ele) {
        console.log("click ho gya hu", ele)
        setCartData((prev) => {
            return [ ...prev, ele ]
        })

    }
    console.log("single card me data", cartData)

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 m-4 max-w-sm hover:scale-105 transition-transform w-96">
            <img
                src={ele?.img}
                alt="Product"
                className="w-full h-48 object-cover rounded-xl"
            />
            <p className="text-lg font-semibold mt-3">{ele?.name}</p>
            <p className="text-gray-600 mt-1">{ele?.dsc}</p>
            <p className="text-green-600 font-bold mt-2">₹{ele?.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-3 hover:bg-blue-600 transition duration-300"
                onClick={() => {
                    cartHandler(ele)
                }}>
                Add to cart
            </button>
        </div>
    );
}

export default Mycart;
