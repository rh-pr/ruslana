import React from 'react'
import Logo from '../common/Logo';
import Navigation from '../common/Navigation';
import LanguageSwitch from '../common/LanguageSwitch';

function Nav() {
    return (
      <div className='nav'>
        <Logo />
        <div className='nav-content'>
          <Navigation />
          <LanguageSwitch />
        </div>
        
      </div>
    )
}

export default Nav