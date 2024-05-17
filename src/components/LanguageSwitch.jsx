import React from 'react'
import { useTranslation} from 'react-i18next'

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('ua')}>ua</button>
    </div>
  )
}

export default LanguageSwitch