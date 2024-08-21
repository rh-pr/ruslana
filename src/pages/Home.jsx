import React from 'react'
import Main from '../components/laylout/Main'
import AboutMe from '../components/common/AboutMe'
import Skills from '../components/common/Skills'
import PortpholioCollaps from '../components/common/PortpholioCollaps'


function Home() {
  
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