import React from 'react'
import logoPath from '../../assets/images/logo.png'

function Logo() {
  return (
    <div className='logo'>
       <img src={logoPath} alt="logo" /> 
    </div>
  )
}

export default Logo