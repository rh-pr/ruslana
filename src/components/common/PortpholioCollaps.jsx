import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Project from './Project';


function PortpholioCollaps() {
    const { t } = useTranslation();
    const projects = t('projects', { returnObjects: true });
    const [projectsArray, setProjectsArray] = useState([]);

    const nextSlide = () => {
      setProjectsArray((prevArray) => {
          const lastProject = prevArray[0];
          return [...prevArray.slice(1), lastProject];
      });
  };

  const prevSlide = () => {
      setProjectsArray((prevArray) => {
          const firstProject = prevArray[prevArray.length - 1];
          return [firstProject, ...prevArray.slice(0, -1)];
      });
  };

  useEffect(() => {
    setProjectsArray([...projects.projects]);
  }, [])
  
  return (
    <div className="slides">
        <p className='h2Collaps'>{projects.header}</p>
        {<div className='slideshow'>
          {projectsArray.length > 0 &&  <> 
            <Project projectData={projectsArray[0]} slideType={'prev'}/>
            <Project projectData={projectsArray[1]} slideType={'centerProj'}/>
            <Project projectData={projectsArray[2]} slideType={'next'}/> </>}

          <div className='prevBtn sledeBtn' onClick={() => prevSlide()}></div>
          <div className='nextBtn sledeBtn' onClick={() => nextSlide()}></div>
          
        </div>}
        
    </div>
  )
}

export default PortpholioCollaps