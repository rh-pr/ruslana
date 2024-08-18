import React from 'react'
import { useTranslation } from 'react-i18next'
import ua from '../../assets/images/skills/ua.png'
import en from '../../assets/images/skills/en.png'
import de from '../../assets/images/skills/de.png'
import js from '../../assets/images/skills/pr/js.png'
import re from '../../assets/images/skills/pr/react.png'
import ts from '../../assets/images/skills/pr/ts.png'
import tw from '../../assets/images/skills/pr/tailwind.png'
import nd from '../../assets/images/skills/pr/node.png'
import LanguageSkills from './LanguageSkills'
import Technologie from './Technologie'

export default function Skills() {
    const { t } = useTranslation();
    const skills = t('skills', { returnObjects: true });
    const arrLanguage = skills.language;
    const arrTechnologie = skills.programs
    const urls = [de, en, ua]
    const urlsTech = [
      {
        name: "JavaScript",
        url: js
      },
      {
        name: "TypeScript",
        url: ts
      }, 
      {
        name: "React",
        url: re
      }, 
      {
        name: "Tailwind",
        url: tw
      },
      {
        name: "Node.js",
        url: nd
      }
    ]
  return (
    <div className='skills'>
        <p className="h2Skills">{skills.header}</p>
        <div className='languages'>
            {arrLanguage && arrLanguage.map((el, ind) => <LanguageSkills languageName={el} languageUrl={urls[ind]}/>)}
        </div>
        <div className='technologie'>
          {arrTechnologie && arrTechnologie.map(el => {
            const findImgUrl = urlsTech.find(obj => obj.name == el.name)
           
            return <Technologie arrTechnologie={el} imgUrl={findImgUrl.url}/>
          })}
        </div>
    </div>
  )
}
