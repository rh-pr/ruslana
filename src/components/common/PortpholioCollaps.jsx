import React from 'react'
import { useTranslation } from 'react-i18next';
import Project from './Project';

function PortpholioCollaps() {
    const { t } = useTranslation();
    const projects = t('projects', { returnObjects: true });
  return (
    <div className="slides">
        <p className='h2Collaps'>Portpholio</p>
        <div className='slideshow'>
          {projects && <Project projectData={projects[0]}/>}
        </div>
    </div>
  )
}

export default PortpholioCollaps