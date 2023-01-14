import React from 'react'
import CardContainer from './CardContainer'
import { CARDDATA } from './cardData'

const Test = () => {
 return (
  <>
   <CardContainer 
    img={CARDDATA[0].img} 
   />
  </>
 )
}

export default Test
