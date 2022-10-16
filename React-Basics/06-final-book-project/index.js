import React from 'react'
// For DOM
import ReactDom from 'react-dom'
// For CSS
import './index.css' 

import {books} from './books'

import {Book} from './Book'

// const names = ['aa','bb','cc']
//   const newName = names.map((name)=>{
//     return<h1>{name}</h1>
//   })

const bookslist =books.map((book)=>{
  return <react><img src= {book.img} alt="" />
      <h1>{book.title}</h1>
    <h4>{book.author.toUpperCase()}</h4></react>
    
})
      

// Nested Components, React Tools
function BookList() {

    return (
      <section className='booklist'>
        {/* {bookslist} */}
        {books.map((book)=>{
          const {img,title,author} = book
          // return <Book key={book.id} book={book}></Book>
          // ... => spread all properties
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    )
}



ReactDom.render( < BookList / > , document.getElementById('root'))