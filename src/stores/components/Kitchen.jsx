

import React from 'react'
import { kitchenData } from '../data/kitchen'


const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
    
  return (
    <>
    <div>
    <h2 className="proTitle">Kitchen</h2>
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

export default Kitchen
