import { useEffect, useMemo, useState } from 'react'
import Main from '../components/laylout/Main'
import ProjectPage from '../components/common/ProjectPage'
import { useTranslation } from 'react-i18next'
import FilterBar from '../components/common/FilterBar';

function Projects() {
    const { t } = useTranslation();
    const projects =  useMemo(() => t('projects', { returnObjects: true }),[t]);
    const [filteredProjects, setFilteredProjects] = useState(null);
    const [projectsList, setProjectsList] = useState(null);

    useEffect(() => {
      projects.projects && setFilteredProjects([...projects.projects]);
      projects.projects && setProjectsList([...projects.projects]);
     }, [projects])


  return (
   <Main>
     <div  className='projects-list'>
        <FilterBar projects={projectsList} setFilteredProjects={setFilteredProjects}/>
        <div className='projects-list'> {filteredProjects && filteredProjects.map((el, ind) => <ProjectPage key={`prpage-${ind}`} project={el}  />)}</div>
     </div>
   </Main>
  )
}

export default Projects