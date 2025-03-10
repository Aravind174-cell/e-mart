

import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
     const firstFiveImages = fridgeData.slice(0,5)
    
  return (
    <>
    <div>
    <h2 className="proTitle">Fridge</h2>
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

export default Fridge
