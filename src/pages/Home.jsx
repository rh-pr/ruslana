import React from 'react'
import Main from '../components/laylout/Main'
import AboutMe from '../components/common/AboutMe'
import Skills from '../components/common/Skills'


function Home() {
  
  return (
    <Main>
        <div className='home' id='home'>
         <AboutMe />
         <Skills />
        </div>
    </Main>
  )
}

export default Home