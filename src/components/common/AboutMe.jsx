import React from 'react'
import { useTranslation } from 'react-i18next'
// import mePath from '../assets/images/me2sh.jpg'

function AboutMe() {
  const { t } = useTranslation();
  const aboutMe = t('aboutMe', { returnObjects: true });
  // {Object.keys(navbarList)
  return (
    <div className='about-me'>
        <div className='my-data' >
           <div className='border'></div>
              <h3 className='hi' data-hi={aboutMe.hi}>{aboutMe.hi}</h3>
              <h2 data-text={aboutMe.name}>{aboutMe.name}</h2>
              <h3 className='job'><span className='level'>{aboutMe.level}</span> {aboutMe.job}</h3>
              <p>{aboutMe.desc}</p>
        </div>
        <div className='my-img'>
        <div className='figure'></div>
            {/* <figure>
            <img src={mePath} alt="me" />
            </figure> */}
        </div>
    </div>
  )
}

export default AboutMe