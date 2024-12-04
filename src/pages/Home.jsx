import React, { useEffect } from 'react'
import Main from '../components/laylout/Main'
import AboutMe from '../components/common/AboutMe'
import Skills from '../components/common/Skills'
import PortpholioCollaps from '../components/common/PortpholioCollaps'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation();


  useEffect(()=> {
    if(location.hash) {
      const skills = document.getElementById('skillsSection');
      skills.scrollIntoView({behavior: 'smooth'}) 
    }
  },[])
  
  return (
    <Main>
        <div className='home' id='home'>
         <AboutMe />
         <Skills />
         <PortpholioCollaps />
        </div>
    </Main>
  )
}

export default Home