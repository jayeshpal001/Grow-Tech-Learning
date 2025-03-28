import {Demo} from './componets/Demo.jsx';
import Demo2 from './componets/Demo2.jsx';

function App() {
  
  let name = 'Rohit';
  console.log(name);
  
  return (
    <div className="App">
      {/* <Demo name={name}></Demo> */}
    
      <h1>This is a app component</h1>
    </div>
  );
}

export default App;
