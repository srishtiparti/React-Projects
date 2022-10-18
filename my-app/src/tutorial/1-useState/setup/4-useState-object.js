import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
  name:'people',
  age:24,
  message:'this is the message'
})

const [name,setName] = useState('peter')
const [age, setAge] = useState('24')
const [message, setMessage] = useState('this is a message')

const changeMessage =()=>{
 // setPerson({...person,message:'hello world'})
 setMessage('Hello World')
}
  return (
    <>
    {/* <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <h3>{person.message}</h3> */}
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>change Message</button>
    </>
  );
};

export default UseStateObject;
