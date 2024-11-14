import React from 'react'
import './orglogoset.css'
import { OrganisationLogos } from '../../constants/constants'
import EdgeCube from '../EdgeCube/EdgeCube'


function OrgLogoSet() {
  return (
    <div className='flex-center orglogoset-container'>
        {OrganisationLogos.map((logo, index) => (
            <div className='flex-center orglogo-container'>
                <img className='orglogo-img' src={logo} key={index} alt={`Organisation Logo ${index}`} />
            </div>
        ))}
        {/* <div className='edgecube-container-1'>
            <EdgeCube 
            edgeSize={100}
            frontColor="#FFFFFF80"  // Black for visible edges
            backColor="#FFFFFF1A"   // Red for hidden edges and diagonals
            />
        </div> */}
    </div>
  )
}

export default OrgLogoSet
