

import React from 'react'
import { speakerData } from '../data/speaker'

const Speaker = () => {

    const firstFiveImages = speakerData.slice(0,5)
    
  return (
     <>
    <div>
    <h2 className="proTitle">Speaker</h2>
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

export default Speaker
