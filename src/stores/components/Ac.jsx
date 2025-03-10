

import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {
    const firstFiveImages = acData.slice(0,5)
    
  return (
    <>
    <div>
    <h2 className="proTitle">Ac</h2>
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

export default Ac
