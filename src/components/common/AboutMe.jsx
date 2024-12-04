import React from 'react'
import { useTranslation } from 'react-i18next'
import git  from '../../assets/images/git.png'
import lin from '../../assets/images/in.png'
import cv from '../../assets/images/cv.png'

function AboutMe() {
  const { t } = useTranslation();
  const aboutMe = t('aboutMe', { returnObjects: true });
  const links = t('links',{returnObjects: true})
  // {Object.keys(navbarList)
  return (
    <div className='about-me'>
      <a className='my-link git' href="https://github.com/rh-pr" target='_blank'><img src={git} alt="git" /></a>
      <a className='my-link lin' href="https://linkedin.com/in/ruslana-hural-
95292529b" target='_blank'><img src={lin} alt="in" /></a>
      <a className='my-link cv' href={links[2].address} target='_blank'><img src={cv} alt="cv" /></a>


        <div className='my-data' >
           <div className='border'></div>
              <h3 className='hi' data-hi={aboutMe.hi}>{aboutMe.hi}</h3>
              <h2 data-text={aboutMe.name}>{aboutMe.name}</h2>
              <h3 className='job'><span className='level'>{aboutMe.level}</span> {aboutMe.job}</h3>
              <p>{aboutMe.desc}</p>
        </div>
        <div className='my-img'>
          <div className='figure'>
            <div className='figureItem'></div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe