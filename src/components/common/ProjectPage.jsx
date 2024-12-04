
function ProjectPage({project}) {
  return (
    <div className='project-card'>
      <img src={project.urlImg} alt="img" className="pr-img" />
     
      <p className="pr-name">{project.name}</p>
      <p className="pr-description">{project.description}</p>
     <div className="pr-links">
      {project.gitUrl && <p className="pr-url"><a href={project.gitUrl} target="_black">Code</a></p>}
      {project.url && <p className="pr-url"><a href={project.gitUrl} target="_black">Live</a></p>}
     </div>
      { <div className="pr-lib">
       <p> <span>  Additional Liebraries </span></p>
       {project.services.map((ser, ind) => <span key={`prser-${ind}`} className="prser">{ser +  (ind !== project.services.length - 1 ? ' | ' : ' ')}</span>)}
       <br />
       {project.libraries && project.libraries.length > 0 && project.libraries.map((lib, ind) => <span key={`pr-${ind}`}>{lib +  (ind !== project.libraries.length - 1 ? ' | ' : '')}</span>)}
      </div>}
    </div>
  )
}

export default ProjectPage