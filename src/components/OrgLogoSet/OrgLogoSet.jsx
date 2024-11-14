import React from 'react'
import './orglogoset.css'
import { OrganisationLogos } from '../../constants/constants'

function OrgLogoSet() {
  return (
    <div className='orglogoset-container'>
        {OrganisationLogos.map((logo, index) => (
            <img src={logo} key={index} alt={`Organisation Logo ${index}`} />
        ))}
    </div>
  )
}

export default OrgLogoSet
