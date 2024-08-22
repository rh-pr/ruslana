import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Project from './Project';


function PortpholioCollaps() {
    const { t } = useTranslation();
    const projects = t('projects', { returnObjects: true });
    const [activeProject, setActiveProject] = useState(null)
    const [prevProject, setPrevProject] = useState(null);
    const [nextProject, setNextProject] = useState(null)
    
    useEffect(() => {
      if (projects && projects.length > 0) {
        setActiveProject(projects[0]);
        setPrevProject(projects.length > 1 ? projects[projects.length - 1] : projects[0]);
        setNextProject(projects.length > 1 ? projects[1] : projects[0]);
      }
    }, [projects])
    
  return (
    <div className="slides">
        <p className='h2Collaps'>Portpholio</p>
        {<div className='slideshow'>
          {prevProject && <Project projectData={prevProject} slideType={'prev'}/>}
          {activeProject && <Project projectData={activeProject} slideType={'active'}/>}
          {nextProject && <Project projectData={nextProject} slideType={'next'}/>}

          {/* {projects && <Project projectData={projects[0]}/>} */}
          
        </div>}
        
    </div>
  )
}

export default PortpholioCollaps