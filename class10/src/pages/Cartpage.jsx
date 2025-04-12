import Mycart from "../components/Mycart";
function Cartpage({ cartData }) {
    console.log("mere cart me data ", cartData);

    return (<div>
        {
  cartData && cartData.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-amber-50 min-h-screen">
      {cartData.map((val, index) => {
        return (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
            <img
              src={val.img}
              alt="Product"
              className="w-full h-48 object-cover rounded-xl"
            />
            <p className="text-xl font-semibold text-rose-700 mt-3">{val.name}</p>
            <p className="text-gray-600 mt-1">{val.dsc}</p>
            <p className="text-green-700 font-bold mt-2">₹{val.price}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <h1 className="text-center text-2xl text-gray-700 mt-10">Your cart is empty 🛒</h1>
  )
}

    </div>)
}
export default Cartpage;