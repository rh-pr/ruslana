import React from 'react'
import Nav from './Nav'
import Footer from '../common/Footer'

function Main({children}) {
  return (
    <div className='main'>
        <Nav />
        {children}
        <Footer />
    </div>
  )
}

export default Main