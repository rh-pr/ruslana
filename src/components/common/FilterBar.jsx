import { useEffect, useMemo, useState } from "react"

function FilterBar({projects,setFilteredProjects}) {
  
  const  [filteredCondition, setFilteredCondition] =  useState([]);

  const updateFilteredCondition = (e) => {
    if (e.target.checked) {
      setFilteredCondition((prev) => [...prev, e.target.name]);      
    } else {
      const updatedCondition = filteredCondition.filter(el => el !== e.target.name)
      setFilteredCondition(updatedCondition); 
    }
  }

  useEffect(() => {
    if (filteredCondition && projects) {
      const updatedProjects = projects.filter(el => filteredCondition.length > 0 ? filteredCondition.includes(el.tags) : projects)
      setFilteredProjects(updatedProjects);
    }
  },[filteredCondition])

  return (
    <div className="filter">
       
        <label for="vehicle1">  <input type="checkbox" id="frontend" name="frontend" value="frontend" onChange={(e) => updateFilteredCondition(e)}/> <span>Frontend</span></label>   
        <label for="vehicle2">  <input type="checkbox" id="backend" name="backend" value="backend" onChange={(e) => updateFilteredCondition(e)}/> <span>Backend</span></label>      
        <label for="vehicle3">  <input type="checkbox" id="fullstack" name="fullstack" value="fullstack" onChange={(e) => updateFilteredCondition(e)}/><span>FullStack</span></label>
    </div>
  )
}

export default FilterBar