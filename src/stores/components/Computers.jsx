

import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {

const firstFiveImages = computerData.slice(0,5)


  return (
    <>
    <div>
    <h2 className="proTitle">Computers</h2>
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

export default Computers
