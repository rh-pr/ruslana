import React from 'react'
import { useTranslation } from 'react-i18next'

function Test() {
const { t } = useTranslation();
const projects = t('projects', { returnObjects: true });
  return (
    <div>
        <h1>{t('profile')}</h1>
        <ul>
            {Object.keys(projects).map(key => <div key={key}>
                <h2>{projects[key].name}</h2>
                <ul>
                    {projects[key].services && projects[key].services.map(el => <span key={el}>{el} </span>)}
                </ul>
            </div>)}
        </ul>
    </div>
  )
}

export default Test