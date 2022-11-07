import React, { FC } from 'react'
import { IProject } from '../../../../../shared'
import { LinkButton } from '../../../../common'

export const ProjectCard: FC<IProject> = ({ demoLink, description, image, name, repoLink, }) => {
  return (
    <article style={{
      padding: '16px',
      borderRadius: '16px',
      border: '1px solid',
      minWidth: '250px',
      maxWidth: '300px',
      //width: '250px',
    }} >
      <div style={{

      }}>
        <div style={{
          display: 'flex',
          borderRadius: '8px',
          overflow: 'hidden'
        }} >
          <img src={image.src} alt={image.alt} style={{
            width: '100%',
            height: '140px',
            objectFit: 'cover',
          }} />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <LinkButton href={repoLink}>Código</LinkButton>
          <LinkButton href={demoLink}>Demo</LinkButton>
        </div>
      </div>
    </article>
  )
}
