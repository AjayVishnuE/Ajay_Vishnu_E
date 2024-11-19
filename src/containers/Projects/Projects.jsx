import React, { useState, useEffect } from 'react';
import './projects.css';
import { ProjectDetails } from '../../constants/constants';

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

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(window.innerWidth > 1200 ? 2 : 1);
  const projectsArray = Object.values(ProjectDetails);
  const totalPages = Math.ceil(projectsArray.length / projectsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth > 1200 ? 2 : 1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    return projectsArray.slice(startIndex, startIndex + projectsPerPage);
  };

  return (
    <div id="Projects" className='flex-center Projects-overall-container'>
      <p className='p-heading'>PROJECTS WORKED ON</p>
      <div className='projects-carousel-wrapper'>
        <button 
          className='carousel-button left'
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className='flex-center Projects-container'>
          {getCurrentProjects().map((item, index) => (
            <div 
              key={index} 
              className='flex-center project-details-div'
              style={{
                animation: `${index === 0 ? 'slideInLeft' : 'slideInRight'} 0.5s ease-out`
              }}
            >
              <img src={item.logo} alt={`${item.name} Logo`} className='project-logo-img' />
              <p className='projects-description'>
                {getHighlightedText(item.description, item.highlights)}
              </p>
              <div className='flex-center projects-button-container'>
                <a 
                  className='flex-center projects-live-demo-button' 
                  href={item.websiteLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <p style={{fontFamily:"Red Hat Mono"}}>Live Demo</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M18.425 9.51896C18.1399 9.51896 17.8664 9.63223 17.6648 9.83385C17.4632 10.0355 17.3499 10.3089 17.3499 10.5941V17.0446C17.3499 17.3298 17.2367 17.6032 17.035 17.8048C16.8334 18.0064 16.56 18.1197 16.2748 18.1197H3.37372C3.08859 18.1197 2.81513 18.0064 2.61351 17.8048C2.41189 17.6032 2.29862 17.3298 2.29862 17.0446V4.14349C2.29862 3.85836 2.41189 3.58491 2.61351 3.38329C2.81513 3.18167 3.08859 3.0684 3.37372 3.0684H9.82428C10.1094 3.0684 10.3829 2.95513 10.5845 2.75351C10.7861 2.55189 10.8994 2.27844 10.8994 1.99331C10.8994 1.70817 10.7861 1.43472 10.5845 1.2331C10.3829 1.03148 10.1094 0.918213 9.82428 0.918213H3.37372C2.51832 0.918213 1.69796 1.25802 1.0931 1.86288C0.488243 2.46773 0.148438 3.2881 0.148438 4.14349V17.0446C0.148438 17.9 0.488243 18.7204 1.0931 19.3252C1.69796 19.9301 2.51832 20.2699 3.37372 20.2699H16.2748C17.1302 20.2699 17.9506 19.9301 18.5555 19.3252C19.1603 18.7204 19.5001 17.9 19.5001 17.0446V10.5941C19.5001 10.3089 19.3869 10.0355 19.1852 9.83385C18.9836 9.63223 18.7102 9.51896 18.425 9.51896Z" fill="white"/>
                    <path d="M14.1244 3.0684H15.823L9.06069 9.81999C8.95992 9.91993 8.87994 10.0388 8.82536 10.1698C8.77078 10.3009 8.74268 10.4414 8.74268 10.5833C8.74268 10.7252 8.77078 10.8658 8.82536 10.9968C8.87994 11.1278 8.95992 11.2467 9.06069 11.3466C9.16063 11.4474 9.27954 11.5274 9.41055 11.5819C9.54156 11.6365 9.68208 11.6646 9.824 11.6646C9.96593 11.6646 10.1064 11.6365 10.2375 11.5819C10.3685 11.5274 10.4874 11.4474 10.5873 11.3466L17.3497 4.59503V6.29368C17.3497 6.57881 17.4629 6.85227 17.6645 7.05389C17.8662 7.25551 18.1396 7.36877 18.4248 7.36877C18.7099 7.36877 18.9833 7.25551 19.185 7.05389C19.3866 6.85227 19.4998 6.57881 19.4998 6.29368V1.99331C19.4998 1.70817 19.3866 1.43472 19.185 1.2331C18.9833 1.03148 18.7099 0.918213 18.4248 0.918213H14.1244C13.8392 0.918213 13.5658 1.03148 13.3642 1.2331C13.1626 1.43472 13.0493 1.70817 13.0493 1.99331C13.0493 2.27844 13.1626 2.55189 13.3642 2.75351C13.5658 2.95513 13.8392 3.0684 14.1244 3.0684Z" fill="white"/>
                  </svg>
                </a>
                <a 
                  href={item.githubLink} 
                  className='projects-git-button' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg style={{marginTop:"2px"}} xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                    <path d="M12.4425 0.156738C10.9092 0.156738 9.39092 0.458744 7.97433 1.04551C6.55774 1.63228 5.2706 2.49232 4.18639 3.57653C1.99674 5.76619 0.766602 8.736 0.766602 11.8326C0.766602 16.9934 4.11759 21.3719 8.75292 22.9247C9.33671 23.0182 9.52353 22.6562 9.52353 22.341V20.3677C6.2893 21.0683 5.60043 18.8032 5.60043 18.8032C5.06333 17.4487 4.3044 17.0868 4.3044 17.0868C3.24189 16.3629 4.38613 16.3862 4.38613 16.3862C5.55372 16.468 6.17254 17.5889 6.17254 17.5889C7.18835 19.3636 8.90471 18.8382 9.57023 18.558C9.67532 17.799 9.97889 17.2853 10.3058 16.9934C7.71376 16.7015 4.99328 15.6974 4.99328 11.2488C4.99328 9.95282 5.43696 8.91366 6.1959 8.08468C6.07914 7.79278 5.67048 6.57849 6.31266 5.00224C6.31266 5.00224 7.29343 4.68699 9.52353 6.19318C10.4459 5.93631 11.4501 5.80788 12.4425 5.80788C13.435 5.80788 14.4391 5.93631 15.3615 6.19318C17.5916 4.68699 18.5724 5.00224 18.5724 5.00224C19.2145 6.57849 18.8059 7.79278 18.6891 8.08468C19.448 8.91366 19.8917 9.95282 19.8917 11.2488C19.8917 15.709 17.1596 16.6898 14.5558 16.9817C14.9762 17.3437 15.3615 18.0559 15.3615 19.1418V22.341C15.3615 22.6562 15.5483 23.0298 16.1438 22.9247C20.7791 21.3602 24.1184 16.9934 24.1184 11.8326C24.1184 10.2993 23.8164 8.78105 23.2296 7.36447C22.6429 5.94788 21.7828 4.66074 20.6986 3.57653C19.6144 2.49232 18.3273 1.63228 16.9107 1.04551C15.4941 0.458744 13.9758 0.156738 12.4425 0.156738Z" fill="#8FFF00"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button 
          className='carousel-button right'
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Projects;

