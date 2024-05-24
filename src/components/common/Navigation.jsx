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
    console.log('staus', statusBtnNav)
  },[statusBtnNav])
  return (
    <nav className='navigation'>
        <ul className={`${switchStatus} menu`}>
            {Object.keys(navbarList).map(key => <li key={key}>
                <Link to={`/${navbarList[key]}`} className='link'> {navbarList[key]} </Link>
            </li>)}
        </ul>
    </nav>
  )
}

export default Navigation