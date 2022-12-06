import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// make sure you prevent default as the page refreshes everytime button is clicked
// you can submit form using onSubmit in form tag or onClick in button tab

const ControlledInputs = () => {
  const [firstName,setFirstName] = useState('')
  const [email,setEmail] =useState('')
  const [people,setPeople] = useState([]);
  const handleSubmit= (e)=>{
    e.preventDefault()
    if(firstName && email){
      //const person = {firstName:firstName,email:email}
      const person ={id:new Date().getTime().toString(), firstName,email}
      setPeople((people)=>{
          return [...people,person]
      })
      setEmail('')
      setFirstName('')
    }
  }
  return <>
  <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='firstName'>Name:</label>
        <input type="text" 
        id='firstName' 
        name='firstName' 
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}/>
      </div>
       <div className='form-control'>
        <label htmlFor='email'>Email:</label>
        <input type="text" id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <button type='submit'>add person</button>
    </form>
    {
      people.map((person,index)=>{
        const{id,firstName,email} =person;
        return(
          <div className='item' key= {id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })
    }
  </article>
  </>;
};

export default ControlledInputs;
