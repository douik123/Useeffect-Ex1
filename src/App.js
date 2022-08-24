import './App.css';
import { useState, useEffect } from "react";
function App() {
  let [count, setCount] = useState(0);
  function inc() {
    setCount(count+1);
  }
  function dec() {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log(count%10)
    if ((count%10===0)&&(count!==0)) {
     alert("num divisible par 10");
  }
},[count]);
  return (
    <div className='all'>
    <div className="App">
      <div className='box'>
        <div className='container'>
      <button className='plus' onClick={inc}>+</button>
      <div className='resu'>{count}</div>
      <button className='min' onClick={dec}>-</button>
      {

      }
    </div>
    </div>
    </div>
    </div>
  );
}
export default App;
