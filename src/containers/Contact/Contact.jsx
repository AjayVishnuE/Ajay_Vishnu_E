import React, { useEffect, useRef } from 'react'
import './contact.css'
import { ConnectSectionData } from '../../constants/constants'


function Contact() {
    const label1Ref = useRef(null);
    const label2Ref = useRef(null);

    useEffect(() => {
        const label1 = label1Ref.current;
        const label2 = label2Ref.current;

        const handleMouseEnterLabel1 = () => {
            label1.style.color = '#8FFF00';
            label2.style.color = '#FFFFFF';
        };
        const handleMouseEnterLabel2 = () => {
            label1.style.color = '#8FFF00';
            label2.style.color = '#FFFFFF';
        };

        const handleMouseLeaveLabel1 = () => {
            label1.style.color = 'transparent';
            label2.style.color = 'transparent';
        };
        const handleMouseLeaveLabel2 = () => {
            label1.style.color = 'transparent';
            label2.style.color = 'transparent';
        };

        label1.addEventListener('mouseenter', handleMouseEnterLabel1);
        label1.addEventListener('mouseleave', handleMouseLeaveLabel1);
        label2.addEventListener('mouseenter', handleMouseEnterLabel2);
        label2.addEventListener('mouseleave', handleMouseLeaveLabel2);

        return () => {
            label1.removeEventListener('mouseenter', handleMouseEnterLabel1);
            label1.removeEventListener('mouseleave', handleMouseLeaveLabel1);
            label2.removeEventListener('mouseenter', handleMouseEnterLabel2);
            label2.removeEventListener('mouseleave', handleMouseLeaveLabel2);
        };
    }, []);
  return (
    <div id='Contact' className='contact-overall-container'>
        <p className='p-heading'>CONNECT WITH ME</p>
        <p className='contact-c1'>Are you looking for a <label className='p-highlight'>web developer</label>?</p>
        <p className='contact-c2'>Then you’re in the right place. Get the fastest solutions you’re looking for.<br></br> Just <label className='p-highlight'>reach out </label>and let me know!</p>
        <p className='contact-email'><span></span>{ConnectSectionData.email}</p>
        <p className='contact-phone'><label ref={label1Ref} className='cwm-phone-label-1'>{ConnectSectionData.phone_conutry_code}&nbsp;</label><label ref={label2Ref} className='cwm-phone-label-2'>{ConnectSectionData.phone}</label></p>
        <div className='contact-logos-container'>
            <a href={ConnectSectionData.linkedin.link} target='_blank'>
                <ConnectSectionData.linkedin.logo/>
            </a>
            <a href={ConnectSectionData.instagram.link} target='_blank'>
                <ConnectSectionData.instagram.logo/>
            </a>
            <a href={ConnectSectionData.medium.link} target='_blank'>
                <ConnectSectionData.medium.logo/>
            </a>
            <a href={ConnectSectionData.faceboook.link} target='_blank'>
                <ConnectSectionData.faceboook.logo/>
            </a>
            <a href={ConnectSectionData.youtube.link} target='_blank'>
                <ConnectSectionData.youtube.logo/>
            </a>
            <a href={ConnectSectionData.x.link} target='_blank'>
                <ConnectSectionData.x.logo/>
            </a>
        </div>
        <div className='flex-center copyrights-line'>
            <p className='p-mono-text'>Completely designed in </p>
            <svg xmlns="http://www.w3.org/2000/svg" style={{padding:"0 3px"}} width="20" height="17" viewBox="0 0 20 29" fill="none">
                <path d="M14.5 19C16.9853 19 19 16.9853 19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19Z" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.5 19C4.60999 19 3.73996 19.2639 2.99994 19.7584C2.25991 20.2529 1.68314 20.9557 1.34254 21.7779C1.00195 22.6002 0.912835 23.505 1.08647 24.3779C1.2601 25.2508 1.68868 26.0526 2.31802 26.682C2.94736 27.3113 3.74918 27.7399 4.62209 27.9135C5.49501 28.0872 6.39981 27.9981 7.22208 27.6575C8.04434 27.3169 8.74715 26.7401 9.24161 26.0001C9.73608 25.26 10 24.39 10 23.5V19M5.5 19H10M5.5 19C4.30653 19 3.16193 18.5259 2.31802 17.682C1.47411 16.8381 1 15.6935 1 14.5C1 13.3065 1.47411 12.1619 2.31802 11.318C3.16193 10.4741 4.30653 10 5.5 10M10 19V10M10 1H14.5C15.6935 1 16.8381 1.47411 17.682 2.31802C18.5259 3.16193 19 4.30653 19 5.5C19 6.69347 18.5259 7.83807 17.682 8.68198C16.8381 9.52589 15.6935 10 14.5 10H10M10 1V10M10 1H5.5C4.30653 1 3.16193 1.47411 2.31802 2.31802C1.47411 3.16193 1 4.30653 1 5.5C1 6.69347 1.47411 7.83807 2.31802 8.68198C3.16193 9.52589 4.30653 10 5.5 10M10 10H5.5" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='p-mono-text'> Made possible by </p>
            <svg xmlns="http://www.w3.org/2000/svg" style={{padding:"0 3px"}} width="20" height="15" viewBox="0 0 20 27" fill="none">
                <path d="M10 9.8999H19V0.899902H1L10 9.8999ZM10 9.8999H1V17.0999L10 26.0999V18.8999H19L10 9.8999Z" stroke="#FFFFFF" stroke-linejoin="round" />
            </svg>
            <a href="https://linkedin.com/in/enricsneelamkavil" target='_blank'>
                <p className='copyrights-name'> Enric S Neelamkavil </p>
            </a>
        </div>
    </div>
  )
}

export default Contact
