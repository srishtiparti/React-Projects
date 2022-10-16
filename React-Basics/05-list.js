import React from 'react'
// For DOM
import ReactDom from 'react-dom'
// For CSS
import './index.css' 

const books=[

{
  id:1,
img: "https://m.media-amazon.com/images/I/910+Ze+BVGL._AC_UL480_FMwebp_QL65_.jpg",
author :'Scott Pratt',
title :'An Innocent Client: A Legal Thriller (Joe Dillard Series Book 1)'
},
{id:2,
img: "https://m.media-amazon.com/images/I/61C-T00vFTS._AC_UL480_FMwebp_QL65_.jpg",
author :'Jack Rosewood',
title :'The Big Book of Serial Killers'
},
{id:3,
img: "https://m.media-amazon.com/images/I/81DCCd9KYSL._AC_UL480_FMwebp_QL65_.jpg",
author :'Jack Rosewood',
title :'Kristin Hannah'
},
]
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


const Book =({img,title,author,children}) =>{
  // const Book =(props) =>{
//  const {img,title,author} =props.book
  return <article className='book'>
      <img src= {img} alt="" />
      <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    {/* props.children */}
  </article>
}

ReactDom.render( < BookList / > , document.getElementById('root'))