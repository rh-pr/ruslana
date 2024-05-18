import React from 'react'
import { useTranslation} from 'react-i18next'
import {supportedLanguages} from '../../i18n/i18n'

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div className='languages'>
      <select name="lang" id="lang" defaultValue="en" onClick={(e) => changeLanguage(e)}>
        {supportedLanguages.map(key =>  <option key={key} value={key} >
            {key.toUpperCase()}
        </option>)}
      </select>
    </div>
  )
}

export default LanguageSwitch