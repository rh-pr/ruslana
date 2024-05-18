import React from 'react'
import { useTranslation } from 'react-i18next'

function Navigation() {
  const { t } = useTranslation();
  const navbarList = t('nav', { returnObjects: true });
  return (
    <nav className='navigation'>
        <ul>
            {Object.keys(navbarList).map(key => <li key={key}>
                {navbarList[key]}
            </li>)}
        </ul>
    </nav>
  )
}

export default Navigation