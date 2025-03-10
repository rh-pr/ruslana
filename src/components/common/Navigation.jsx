import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavBtnContext } from '../../contexts/NavBtnContext'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
  const {statusBtnNav, setStatusBtnNav } = useContext(NavBtnContext)
  const [switchStatus, setSwitchStatus] = useState('openMenu')

  const { t } = useTranslation();
  const navbarList = t('nav', { returnObjects: true });

  const navigation = useNavigate()

  useEffect(()=>{
    statusBtnNav ? setSwitchStatus(st => "open-menu") : setSwitchStatus(st => "close-menu");
  },[statusBtnNav])
  return (
    <nav className='navigation'>
        <ul className={`${switchStatus} menu`}>
        {Object.keys(navbarList).map(key => 
            {if(navbarList[key] == 'Skills') {
                return <li key={key}>
                  {/* <Link to={'#skillsSection'} className='link'> {navbarList[key]} </Link> */}
                
                        <a href="home#skillsSection" className='link'>{navbarList[key]}</a>
                 
                </li>
            } else {
              return <li key={key}>
                <Link to={`/${navbarList[key].toLowerCase()}`} className='link' onClick={() => {setStatusBtnNav(false)}}> {navbarList[key]} </Link>
              </li>
            }})}
        </ul>
    </nav>
  )
}

export default Navigation