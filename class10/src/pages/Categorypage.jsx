import { category } from "../utils/CategoryData";

function Categorypage() {
    console.log("category has come", category);
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                category?.map((singlecategory, index) => (
                    <button
                        key={index}
                        className="bg-white shadow-md hover:shadow-lg rounded-2xl px-6 py-4 text-center border border-gray-200 hover:bg-blue-100 transition duration-300 ease-in-out"
                    >
                        {singlecategory}
                    </button>
                ))
            }
        </div>
    );
}

export default Categorypage;
