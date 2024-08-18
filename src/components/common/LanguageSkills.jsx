import React from 'react'

function LanguageSkills({languageName, languageUrl}) {
  return (
    <div className='oneLng'>
        <p>{languageName}</p>
        <img src={languageUrl}></img>
    </div>
  )
}

export default LanguageSkills