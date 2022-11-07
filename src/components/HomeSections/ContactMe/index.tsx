import React from 'react'
import { HomeSectionContainer } from '../../common'

export const ContactMe = () => {
  return (
    <HomeSectionContainer sectionTitle='Contáctame' >
      <div style={{
        display: 'flex',
        gap: '8px',
      }} >
        <a href="mailto:infoluisforerop@gmail.com"   target='_blank' rel='noreferrer' >
          <img alt="Gmail Badge" src="https://img.shields.io/badge/-infoluisforerop@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white" height="35px"></img>
        </a>
        <a href="https://t.me/luis_forerop" target='_blank' rel='noreferrer' >
          <img alt="Telegram Badge" src="https://img.shields.io/badge/-luis_forerop-0088CC?style=flat&logo=Telegram&logoColor=white" height="35px"></img>
        </a>
      </div>
    </HomeSectionContainer>
  )
}
