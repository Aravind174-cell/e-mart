

import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'

const BooksPage = () => {
  return (
    <>
    <Navbar/>
     <div className="pageSection">
        {booksData.map((item) => {
            return (
                <div> 
                      <div className="img">
                        <img src={item.image} alt="" height={250}/>
                      </div>
                      <div className="proModel">
                           {item.title} {item.author}
                      </div> 


                </div>
            )
        })}
         
     </div>
    
    </>
  )
}

export default BooksPage
