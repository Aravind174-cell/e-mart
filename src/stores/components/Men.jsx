

import React from 'react'
import { menData } from '../data/men'

const Men = () => {

 const firstFiveImages = menData.slice(0,5)
 

  return (
    <>
    <div>
    <h2 className="proTitle">Men</h2>
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

export default Men
