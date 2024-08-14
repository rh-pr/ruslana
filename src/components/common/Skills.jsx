import React from 'react'
import { useTranslation } from 'react-i18next'
import ua from '../../assets/images/skills/ua.png'
import en from '../../assets/images/skills/en.png'
import de from '../../assets/images/skills/de.png'

export default function Skills() {
    const { t } = useTranslation();
    const skills = t('skills', { returnObjects: true });
  return (
    <div className='skills'>
        <p className="h2Skills">{skills.header}</p>
        <div className='languages'>
            <div className='oneLng'>
            <p>{skills.language[1]}</p>
                <img src={ua}></img>
            </div>
            
            <div className='oneLng'>
                <p>{skills.language[1]}</p>
                <img src={en}></img>
            </div>
            
            <div className='oneLng'>
                <p>{skills.language[0]}</p>
                <img src={de}></img>
            </div>
        </div>
    </div>
  )
}
