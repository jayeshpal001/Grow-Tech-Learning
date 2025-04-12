import React from 'react'

export const Cards = ({myData}) => {
    console.log("This is Card data", myData);
    
    // return (
    //     <div className="bg-gray-100 p-8 min-h-screen flex items-center justify-center w-full">
    //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    //         {/* Food Image */}
    //         <img 
    //           className="w-full h-64 object-cover" 
    //           src={myData.img} 
    //           alt={myData.dsc} 
    //         />
            
    //         <div className="p-6">
    //           {/* Header Section */}
    //           <div className="flex justify-between items-start mb-4">
    //             <h2 className="text-2xl font-bold text-gray-800">{myData.name}</h2>
    //             <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
    //               ${myData.price}
    //             </span>
    //           </div>
    
    //           {/* Rating and Location */}
    //           <div className="flex items-center mb-4">
    //             <div className="flex items-center">
    //               <div className="flex text-yellow-400">
    //                 {'★'.repeat(myData.rate)}
    //               </div>
    //               <span className="ml-2 text-gray-600">{myData.rate}.0</span>
    //             </div>
    //             <span className="mx-2 text-gray-300">•</span>
    //             <div className="flex items-center text-gray-600">
    //               <svg 
    //                 className="w-4 h-4 mr-1" 
    //                 fill="none" 
    //                 stroke="currentColor" 
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path 
    //                   strokeLinecap="round" 
    //                   strokeLinejoin="round" 
    //                   strokeWidth="2" 
    //                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //                 />
    //                 <path 
    //                   strokeLinecap="round" 
    //                   strokeLinejoin="round" 
    //                   strokeWidth="2" 
    //                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //                 />
    //               </svg>
    //               <span>{myData.country}</span>
    //             </div>
    //           </div>
    
    //           {/* Description */}
    //           <p className="text-gray-600 mb-6">{myData.dsc}</p>
    
    //           {/* Order Button */}
    //           <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
    //             Order Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
        
    //   );
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
            {/* Food Image */}
            <img 
                className="w-full h-64 object-cover" 
                src={myData.img} 
                alt={myData.dsc} 
            />
            
            <div className="p-6">
                {/* Rest of your card content remains the same */}
                {/* ... */}
            </div>
        </div>
    );

}
