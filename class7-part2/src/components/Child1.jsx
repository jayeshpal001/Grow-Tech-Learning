// import React, { useContext, useState } from "react";
// import { apiContext } from "../App";
// function Child1() {
//   const data = useContext(apiContext);
//   const [track, setTrack] = useState(true);
//   function handle() {
//     setTrack(!track);
//   }
//   console.log("now the data come from app.js  ", data?.Business);
//   return (
//     <div>
//       {data?.Business?.map((ele, index) => {
//         return (
//           <div key={index}>
//             <img src={ele?.image?.url} alt={ele?.image?.alt} />
//             <p>{ele?.title}</p>
//             <p>
//               {track ? (
//                 <div>
//                   {ele.description.substr(0, 100)}
//                   <span onClick={handle} style={{ color: "blue" }}>
//                     Read More
//                   </span>
//                 </div>
//               ) : (
//                 <div>
//                   {ele.description}
//                   <span onClick={handle} style={{ color: "blue" }}>
                
//                     Read Less
//                   </span>
//                 </div>
//               )}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Child1;
import React, { useContext,useState } from "react";
import { apiContext } from "../App";
import './Child1.css'; // Import your CSS file

function Child1() {
  const data = useContext(apiContext);
  const [track, setTrack] = useState(true);
    function handle() {
      setTrack(!track);
    }
  console.log("now the data comes from app.js  ", data?.Business);
  return (
    <div className="card-container">
      {data?.Business?.map((ele, index) => {
        return (
          <div className="card" key={index}>
            <img className="card-image" src={ele?.image?.url} alt={ele?.image?.alt} />
            <div className="card-content">
              <h3 className="card-title">{ele?.title}</h3>
              <p className="card-description">    {track ? (
                <div>
                  {ele.description.substr(0, 100)}
                  <span onClick={handle} style={{ color: "blue", cursor: "pointer"}}>
                    Read More
                  </span>
                </div>
              ) : (
                <div>
                  {ele.description}
                  <span onClick={handle} style={{ color: "blue" }}>
                
                    Read Less
                  </span>
                </div>
              )}</p>
            </div>
            <button style={{
              backgroundColor:"red"
            }}>Nhi Padhna</button>
          </div>
         
        );
      })}


    </div>
  );
}
export default Child1;
