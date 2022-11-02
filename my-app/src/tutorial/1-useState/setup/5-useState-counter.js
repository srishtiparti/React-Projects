import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] =useState(0)
  const increase =()=>{
    setValue(value+1)
  }
  const decrease =()=>{
    setValue(value-1)
  }
  const complexIncrease=()=>{
    setTimeout(()=>{
     // setValue(value+1);
     setValue((prevState)=>{
      return prevState+1;
     })
    },2000)
  }

  const complexdecrease = ()=>{
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState -1
      },2000)
    })
  }

  return <>
  <section style={{margin:'4rem 0'}}>
    <h1>Counter</h1>
    <h1>{value}</h1>
    <button type='button' className='btn' onClick={increase}>Increase</button>
    <button type='button' className='btn' onClick={()=>{setValue(0)}}>Reset</button>
    <button type='button' className='btn' onClick={decrease}>Decrease</button>
  </section>
    <section style={{margin:'4rem 0'}}>
    <h1>Complex Counter</h1>
    <h1>{value}</h1>
    <button type='button' className='btn' onClick={complexIncrease}>Increase</button>
    <button type='button' className='btn' onClick={()=>{setValue(0)}}>Reset</button>
    <button type='button' className='btn' onClick={complexdecrease}>Decrease</button>
  </section>
  </>;
};

export default UseStateCounter;
