import React, { useContext, useState } from 'react';
import { apiContext } from '../App';

export const ChildB = () => {
  const {data,setData} = useContext(apiContext);
  const [track, setTrack] = useState(true);

  const handleReadToggle = () => setTrack(!track);


 function handleDelete(ind){
  let temp = [...data];
   temp = temp.filter((val)=>{

    
    return val.id!= ind
  })

  setData(temp);
  }
  
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {data?.map((ele, index) => (
        <div 
          key={index}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden hover:-translate-y-2 transition-transform"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={ele?.image?.url}
              alt={ele?.image?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{ele?.title}</h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              {track ? ele.description?.substring(0, 100) + '...' : ele.description}
              <span
                onClick={handleReadToggle}
                className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer ml-1 transition-colors"
              >
                {track ? 'Read More ↗' : 'Read Less ↙'}
              </span>
            </p>

            <button className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold 
                            hover:from-red-600 hover:to-red-700 transition-colors hover:shadow-lg" 
                            onClick={()=>{
                              handleDelete(ele.id);
                            }}>
              Mujhe nahi Chahiye
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};