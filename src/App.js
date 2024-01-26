 import logo from './lucho-logo.png';
 import './App.css';

 function App() {
   return (
     <div className="App">
       <header className="App-header">
        <p>
          Welcome to your life, there's no turning back!
        </p>
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           The key to immortality is first living a life worth remembering.
         </p>
         <a
           className="App-link"
           href="http://127.0.0.1:8000"
           target="_blank"
           rel="noopener noreferrer"
         >
           Manyari.Dev
         </a>
       </header>
     </div>
   );
 }

 export default App;


// import React from "react";
// import Fruits from "./Fruits";
// import FruitsCounter from "./FruitsCounter";

// function App() {
//   const [fruits] = React.useState([
//       {fruitName: 'apple', id: 1},
//       {fruitName: 'apple', id: 2},
//       {fruitName: 'plum', id: 3},
//   ]);

//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <Fruits fruits={fruits} />
//       <FruitsCounter fruits={fruits} />
//     </div>
//   );
// }

// export default App;



// function App() {
  
//   return ( 
//      <div> 
// <button onClick={ () => console.log('clicked') }> 
//   Click me
// </button>
//      </div>
//   )
// }
// export default App