import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
// Every time you use sideEffect! use clean up function

const UseEffectCleanup = () => {
 const [size,setSize] = useState(window.innerWidth)

 const checkSize =()=>{
  // it is triggering the re-render
  setSize(window.innerWidth)
 }
useEffect(()=>{
  // callback function
  // to stop re-rendering we use clean-up function
  console.log('useEffect')
  window.addEventListener('resize',checkSize)
  // cleanup function
  // you can also use [] - dependency array
  // return()=>{
  //   console.log('cleanup')
  //   window.removeEventListener('resize',checkSize)
  // }
},[])
  console.log('render')

 return<>
 <h1>window</h1>
 <h2>{size} PX</h2>
 </>
};

export default UseEffectCleanup;
