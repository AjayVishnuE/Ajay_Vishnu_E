import React from 'react'
import './knowmore.css'
import EdgeCube from '../EdgeCube/EdgeCube'
import pdfFile from '../../assets/Resume Download/Resume_Ajay_Vishnu_E.pdf'

function KnowMore() {
  return (
    <div className='flex-center knowmore-overall-container'>
      <p className='p-heading know-more-h'>WANT TO KNOW MORE?</p>
      <p className='knowmore-description'>
      Discover my passion for building seamless and engaging digital experiences. Curious about my journey? Download my resume below and let’s create something amazing together!        </p>
      <a className='flex-center knomore-resume-downloadd-btn' href={pdfFile} download="Resume Ajay Vishnu E" target='_blank'>
          <p>DOWNLOAD MY RESUME</p>
          <svg className='downloadicon' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M22.8484 16.2889V21C22.8484 21.6247 22.6003 22.2239 22.1585 22.6656C21.7168 23.1074 21.1176 23.3555 20.4929 23.3555H4.00399C3.37926 23.3555 2.78012 23.1074 2.33836 22.6656C1.89661 22.2239 1.64844 21.6247 1.64844 21V16.2889M6.35955 10.4L12.2484 16.2889M12.2484 16.2889L18.1373 10.4M12.2484 16.2889V2.15555" stroke="#8FFF00" stroke-width="2.35556" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
      </a>
      <div className='edgecube-container-4'>
            <EdgeCube 
            edgeSize={170}
            frontColor="#1A1A1A"  
            backColor="#1A1A1A"  
            />
      </div>
      <div className='edgecube-container-5'>
            <EdgeCube 
            edgeSize={400}
            frontColor="#1A1A1A"  
            backColor="#1A1A1A"  
            />
      </div>
    </div>
  )
}

export default KnowMore
