import React from 'react'
// For DOM
import ReactDom from 'react-dom'

// Nested Components, React Tools
function Greeting() {
    return (<div >
      <Person/>
      <Message/>      
      </div>)
}

const Person = ()=> <h2>john doe</h2>
const Message =()=> {
  return<p>this is message</p>
}

ReactDom.render( < Greeting / > , document.getElementById('root'))