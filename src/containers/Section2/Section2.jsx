import React from 'react'
import { Skills, WhoAmI, EdgeCube } from '../../components'

function Section2() {
  return (
    <div style={{position:"relative"}}>
      <WhoAmI/>
      <Skills/>
      <div className='edgecube-container-2'>
            <EdgeCube 
            edgeSize={250}
            frontColor="#FFFFFF80"  // Black for visible edges
            backColor="#FFFFFF1A"   // Red for hidden edges and diagonals
            />
      </div>
      <div className='gradientcircle gradient-circle-div3'>
      </div>
    </div>
  )
}

export default Section2
