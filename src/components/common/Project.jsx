import React from 'react'
import { useTranslation } from 'react-i18next';
import point from '../../assets/images/pr/point.png'

function Project({projectData}) {
    const { t } = useTranslation();
    const more = t('more');
    const imgUrl = projectData.url;
  return (
    <div className='project'>
        <img src={point} alt="point" className='point'/>
        <figure>
            <img src={imgUrl} alt="img" />
        </figure>
        <div className='projectInf'>
            <p className='projectName'>{projectData.name}</p>
            <div className='services'>
                {projectData.services && projectData.services.map(el => (
                    <span key={projectData.id}>{el} </span>
                ))}
            </div>
            <button>{more}</button>
        </div>
    </div>
  )
}

export default Project