import React from 'react'
// For DOM
import ReactDom from 'react-dom'

// stateless components
// always return JSX

// function Greeting() {
//     return <h4 > First Component </h4>
// }

// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello worrld')
// }

// function Greeting() {
//     return (<div > First Component </div>)
// }

const Greeting = () => {
    return React.createElement('div', {}, 'hello worrld')
}


ReactDom.render( < Greeting / > , document.getElementById('root'))