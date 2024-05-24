import React from 'react'
import Main from '../components/laylout/Main'
import AboutMe from '../components/common/AboutMe'


function Home() {
  
  return (
    <Main>
        <div className='home' id='home'>
         <AboutMe />
        </div>
    </Main>
  )
}

export default Home