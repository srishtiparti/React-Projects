import React from 'react'
// For DOM
import ReactDom from 'react-dom'
// For CSS
import './index.css' 

// Nested Components, React Tools
function BookList() {
    return (
      <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
      </section>
    )
}

const Book =() =>{
  return <article className='book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image=()=>
  <img src="https://m.media-amazon.com/images/I/910+Ze+BVGL._AC_UL480_FMwebp_QL65_.jpg" alt="" />

const Author =() => <h4>Scott Pratt</h4>
const Title =() => <h1>An Innocent Client: A Legal Thriller (Joe Dillard Series Book 1)</h1>
ReactDom.render( < BookList / > , document.getElementById('root'))