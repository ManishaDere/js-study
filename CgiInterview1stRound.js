class MyClass {

    name = 'TypeScript';
   
    normalMethod() {
        // console.log("in normal methos first ==>", this.name)
        let self = this;
      setTimeout(function () {
  
        console.log("second ==>", this.name);
  
      }, 1000);
  
    }
   
    arrowMethod() {
  
      setTimeout(() => {
  
        console.log("arrow ==>", this.name);
  
      }, 1000);
  
    }
  
  }
   
  const obj = new MyClass();
  obj.normalMethod();  
  obj.arrowMethod();
   
// // //   output - 
// // //   undefined
// // //   TypeScript

// import React, { useState } from "react"

// function App() {

//   const [count, setCount] = useState(0)
 
//   const increment = () => {

//     setCount(count + 1)

//   }

//   return (
//         <div>
//             <button onClick={increment}>Increment</button>
//             <p>Count: {count}</p>
//         </div>

//   )

// }

// export default App

 
//   throttle
// 300ms


//   debounce

//   Iphone

// "use strict";
// c = 2;
// console.log(c);



   