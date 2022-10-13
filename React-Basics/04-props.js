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
        author={firstBook.author}>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                A asperiores exercitationem eligendi incidunt laboriosam ipsum
                 officiis quasi fugiat illo beatae.
                 Repellat distinctio cumque ex nemo expedita et a eligendi corporis.
            </p>
        </Book>
      </section>
    )
}


const Book =({img,title,author,children}) =>{
  //const Book =({props}) =>{
 // const {img,title,author,children} =props
  return <article className='book'>
      <img src= {img} alt="" />
      <h1>{title}</h1>
      {children}
    <h4>{author.toUpperCase}</h4>
    {/* props.children */}
  </article>
}

ReactDom.render( < BookList / > , document.getElementById('root'))