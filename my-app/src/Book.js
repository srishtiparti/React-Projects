import React from 'react'


export const Book =({img,title,author,children}) =>{
// attribute, eventHandler
// onClick, onMouseOver

const clickHandler= (e)=>{
  alert(e.target);
}

const complexExample = (e)=>{
  console.log(author)
}

  return (
  <article className='book' onMouseOver={()=>{console.log(title)}}>
      <img src= {img} alt="" />
      <h1 onClick={()=>console.log(title)}>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <button type='button' onClick={clickHandler}>Button Example</button>
    <button type='button' onClick={()=>complexExample}>Author Info</button>

    {/* props.children */}
  </article>
)}


