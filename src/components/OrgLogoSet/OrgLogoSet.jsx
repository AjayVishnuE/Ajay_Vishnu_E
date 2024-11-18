import React, { useState, useEffect } from 'react';
import './orglogoset.css';
import { OrganisationLogos } from '../../constants/constants';
import EdgeCube from '../EdgeCube/EdgeCube';

function OrgLogoSet() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const logosToDisplay = isMobile ? [...OrganisationLogos, ...OrganisationLogos] : OrganisationLogos;

    return (
        <div className='flex-center orglogoset-container'>
            {logosToDisplay.map((logo, index) => (
                <div key={index} className='flex-center orglogo-container'>
                    <img className='orglogo-img' src={logo} alt={`Organisation Logo ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default OrgLogoSet;
