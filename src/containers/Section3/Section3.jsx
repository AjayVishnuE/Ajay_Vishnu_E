import React from 'react'
import { Experience, Projects } from '../../components'

function Section3() {
  return (
    <div style={{position:"relative", height:"fit-content"}}>
      <Projects/>
      <Experience/>
      <div className='gradientcircle gradient-circle-div4'>
      </div>
    </div>
  )
}

export default Section3
