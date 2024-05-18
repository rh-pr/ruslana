import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavBtnContext } from '../../contexts/NavBtnContext'

function Navigation() {
  const {statusBtnNav, setStatusBtnNav } = useContext(NavBtnContext)
  const [switchStatus, setSwitchStatus] = useState('openMenu')

  const { t } = useTranslation();
  const navbarList = t('nav', { returnObjects: true });

  useEffect(()=>{
    statusBtnNav ? setSwitchStatus(st => "open-menu") : setSwitchStatus(st => "close-menu");
    console.log('staus', statusBtnNav)
  },[statusBtnNav])
  return (
    <nav className='navigation'>
        <ul className={`${switchStatus} menu`}>
            {Object.keys(navbarList).map(key => <li key={key}>
                {navbarList[key]}
            </li>)}
        </ul>
    </nav>
  )
}

export default Navigation