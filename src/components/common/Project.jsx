import React from 'react'
import { useTranslation } from 'react-i18next';
import point from '../../assets/images/pr/point.png'

function Project({projectData, slideType}) {
    const { t } = useTranslation();
    const more = t('more');
    console.log(projectData,' data')
  return (
    <div className={`project ${slideType}`}>
        <img src={point} alt="point" className='point'/>
        <figure>
            <img src={projectData.urlImg} alt="img" />
        </figure>
        <div className='projectInf'>
            <p className='projectName'>{projectData.name}</p>
            <div className='services'>
                {projectData.services && projectData.services.map((el, index) => (
                    <span key={index}>{el} </span>
                ))}
            </div>
            <a href="" target="_blank" className='button more'>{more}</a>
        </div>
    </div>
  )
}

export default Project