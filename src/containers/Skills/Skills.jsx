import React from 'react';
import { FrontendSkillSetData, BackendSkillSetData, OtherSkillSetData } from '../../constants/constants';
import { EdgeCube } from '../../components';
import './skills.css';

function Skills() {
  const SkillTitles = ["Front End", "Back End", "Others"]
  const skillSets = {
    Frontend: FrontendSkillSetData,
    Backend: BackendSkillSetData,
    Other: OtherSkillSetData,
  };

  return (
    <div id="Skills" className='skills-overall-container'>

        <p className='p-heading'>SHOWCASING SKILLSET</p>
        <div className='flex-center skills-container'>
            {Object.entries(skillSets).map(([category, skills], categoryIndex) => (
            <div key={categoryIndex} className='skills-category'>
            <h2 className='category-heading'>{SkillTitles[categoryIndex]}</h2>
            <div className='flex-center skills-grid'>
                {Object.entries(skills).map(([skillName, SkillSVG], skillIndex) => (
                <div key={skillIndex} className='flex-center skill-card'>
                    <div className='flex-center skill-icon'>
                    <SkillSVG />
                    </div>
                    <p className='skill-name'>{skillName}</p>
                </div>
                ))}
            </div>
            </div>
            ))}
        </div>
    </div>
  );
}

export default Skills;


