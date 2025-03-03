

import React from 'react'
import { watchData } from '../data/watch'

const Watch = () => {
 const firstFiveImages = watchData.slice(0,5)
 

  return (
    <>
    <div>
    <h2 className="proTitle">Watch</h2>
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

export default Watch
