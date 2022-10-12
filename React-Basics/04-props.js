import React from 'react'
// For DOM
import ReactDom from 'react-dom'
// For CSS
import './index.css' 

const firstBook={
  img: "https://m.media-amazon.com/images/I/910+Ze+BVGL._AC_UL480_FMwebp_QL65_.jpg",
author :'Scott Pratt',
title :'An Innocent Client: A Legal Thriller (Joe Dillard Series Book 1)'
}
// Nested Components, React Tools
function BookList() {
    return (
      <section className='booklist'>
        <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}/>
      </section>
    )
}


const Book =(props) =>{
  console.log(props)
  return <article className='book'>
      <img src= {props.img} alt="" />
      <h1>{props.title}</h1>
    <h4>{props.author.toUpperCase}</h4>
  </article>
}

ReactDom.render( < BookList / > , document.getElementById('root'))