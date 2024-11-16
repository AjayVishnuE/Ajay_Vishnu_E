import React from 'react';
import './expandedu.css';
import { EducationAndExperienceDetails } from '../../constants/constants';
import { EdgeCube } from '../../components';

function ExperienceAndEducation() {
  return (
    <div id="Experience" className='flex-center expandedu-overall-container'>
      {Object.values(EducationAndExperienceDetails).map((section, sectionIndex) => (
        <div key={sectionIndex} className='flex-center expandedu-container'>
          <p className='p-heading exp-edu-heading'>{section.Title}</p>
          
          {Object.values(section).map((item, itemIndex) => 
            itemIndex !== 0 && (
              <div key={itemIndex} className='flex-center expandedu-item'>
                <div className='expandedu-inside-title-container'>
                    <p className='eit expandedu-inside-title1'>{item.Title || item.Instituition}</p>
                    <p className='eit expandedu-inside-title2'>{item.Course || item.Organisation}</p>
                </div>
                <p className='item-duration'>{item.Duration}</p>
                <p className='item-description'>{item.Description}</p>
              </div>
            )
          )}
        </div>
      ))}
      <div className='edgecube-container-3'>
        <EdgeCube 
        edgeSize={150}
        frontColor="#FFFFFF80"  
        backColor="#3a3535e1"  
        />
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
