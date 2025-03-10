

import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
    const firstFiveImages = booksData.slice(0,5)
    
  return (
    <>
    <div>
    <h2 className="proTitle">Books</h2>
    </div>
    <div className="proSection">
      {
        firstFiveImages.map((item) => {
             return(
                <div className="imgBox"> 
                    <img className="proImage" src={item.image} alt="" />
                </div>
             )
        })
      }
    </div>
    </>
    
  )
}

export default Books
