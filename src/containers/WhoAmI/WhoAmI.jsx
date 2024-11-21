import React from 'react'
import './whoami.css'
import { WhoAmIData } from '../../constants/constants'
import { EdgeCube } from '../../components'
import pdfFile from '../../assets/Resume Download/Resume_Ajay_Vishnu_E.pdf'

const getHighlightedText = (text, keywords) => {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  return text.split(regex).map((part, index) =>
    keywords.includes(part) ? (
      <span key={index} style={{ color: '#8fff00', fontWeight: '400' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

function WhoAmI() {
  const { DescriptionParagraph1, DescriptionParagraph2, Highlights } = WhoAmIData;
  const combinedKeyTerms = [...WhoAmIData.KeyTerms1, ...WhoAmIData.KeyTerms2];
  
  return (
    <div id="About" className='flex-center whoami-container'>
      <p className='p-heading'>WHO AM I</p>
      <p className='whoami-description wd-1'>
        {getHighlightedText(DescriptionParagraph1, Highlights)}
      </p>
      <p className='whoami-description wd-2'>
        {getHighlightedText(DescriptionParagraph2, Highlights)}
      </p>
      <div className='flex-center whoami-key-terms-container'>
        {Object.values(WhoAmIData).slice(3, 5).map((terms, index) => (
          <div className='flex-center key-terms-insider' key={index}>
            <p className='key-terms-number'>{terms[0]}+</p>

            <div className='key-terms-insider-insider'>
              <p className={`ktl key-terms-line1-${index}`}>{terms[1]}</p>
              <p className={`ktl key-terms-line2-${index}`}>{terms[2]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-center whoami-logo-container'>
      {Object.values(WhoAmIData).slice(5, 8).map((contents, index) => (
        <a href={contents[1]} key={index} target="_blank" rel="noopener noreferrer">
          {React.createElement(contents[0])}
        </a>
      ))}
      </div>
      <a href={pdfFile} download="Resume Ajay Vishnu E" target='_blank'>
        <div className='whoami-download-button'>
          DOWNLOAD ME
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 20" fill="none">
            <path d="M19.4185 13V17C19.4185 17.5304 19.2077 18.0391 18.8327 18.4142C18.4576 18.7893 17.9489 19 17.4185 19H3.41846C2.88802 19 2.37932 18.7893 2.00424 18.4142C1.62917 18.0391 1.41846 17.5304 1.41846 17V13M5.41846 8L10.4185 13M10.4185 13L15.4185 8M10.4185 13V1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </a>
      <div className='edgecube-container-1'>
              <EdgeCube 
              edgeSize={130}
              frontColor="#FFFFFF80"  
              backColor="#FFFFFF1A"   
              />
            </div>
      <div className='edgecube-container-2'>
            <EdgeCube 
            edgeSize={250}
            frontColor="#FFFFFF80" 
            backColor="#FFFFFF1A"  
            />
      </div>

    </div>
    
  );
}

export default WhoAmI
