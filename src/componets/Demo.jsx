import React from "react";
import Demo2 from "./Demo2";

export const Demo = ({name}) => {
  return (
    <div>{name}
    <Demo2 name={name}></Demo2>
    </div>
  )
}

// function Demo() {
//     console.log('i am a deom file')
//   return (
//     <>
//       <h1>This is heading no1</h1>
//       <h2>This is heading no2</h2>
//     </>
//   );
// }
// export default Demo;
