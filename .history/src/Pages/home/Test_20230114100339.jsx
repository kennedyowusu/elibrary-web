import React from 'react'
import CardContainer from './CardContainer'
import { CARDDATA } from './cardData'

const Test = () => {
 return (
  <>
   <CardContainer 
    img={CARDDATA[0].img} 
    title={CARDDATA[0].title}
    desc={CARDDATA[0].desc}
    button='View Details'
    buttonLink='/'
   />
  </>
 )
}

export default Test
