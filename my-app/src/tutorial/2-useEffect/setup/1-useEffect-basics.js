import React, { useState, useEffect, useReducer } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// we cannot place them in conditional (if)
const UseEffectBasics = () => {
  const [value,setValue] = useState(0)
  useEffect(()=>{
    console.log('call useEffect')
    if(value>=1){
 document.title =`New Messages(${value})`
    }
   
  },[value])

  useEffect(()=>{
    console.log('hello world')
  })
  console.log('render component')
  return <><h2>{value}</h2>
  <button type='button' className='btn'onClick={()=>setValue(value+1)}>
    Click Me
  </button>
  </>;
};

export default UseEffectBasics;
