import React from 'react'
import './spotlight.css'
import { HelloTextLoop } from '../../components'
import { SpotlightData } from '../../constants/constants'
import { WhiteDownloadIcon, BlackContactArrow } from './svg_exports'
import pdfFile from '../../assets/Resume Download/Resume_Ajay_Vishnu_E.pdf'
 
function Spotlight() {
  return (
    <div id="Home" className='flex-center Spotlight-overall-container'>
      <HelloTextLoop/>
      <h1 className='title-text'>I'm&nbsp;<label className='namestyles'>{SpotlightData.name}</label>,</h1>
      <h1 className="title-description">{SpotlightData.desription}</h1>
      <div className='flex-center spotlight-buttons-container'>
          <a href={pdfFile} download="Resume Enric S Neelamkavil.pdf" target='_blank'>
              <div className='flex-center spotlight-download-button'>
                <p>DOWNLOAD CV</p>
                <WhiteDownloadIcon/>
              </div>
          </a>
          <a href="#Contact">
              <div className='flex-center spotlight-contact-button'>
                <p>CONTACT ME</p>
                <BlackContactArrow/>
              </div>  
          </a>
      </div>
      <div className='flex-center spotlight-roles-container'>
        {SpotlightData.roles.map((item,index) => {
            return(
              <React.Fragment key={index}>
                <p className='spotlight-roles'>{item}</p>
                {index < SpotlightData.roles.length - 1 && <p className='line-between'>|</p>}
              </React.Fragment>
            )
          })  
        }
      </div>
      <div className='gradientcircle gradient-circle-div1'>
        </div>
        <div className='gradientcircle gradient-circle-div2'>
        </div>
    </div>
  )
}

export default Spotlight
