import React from 'react'
import { HomeSectionContainer } from '../../common'
import { useGetTechnologies } from '../../../shared/hooks/'

export const TechnicalSkills = () => {
  const technologies = useGetTechnologies()
  return (
    <HomeSectionContainer sectionTitle='Stack tecnológico' >
      <div style={{
        display: 'flex',
        gap: '16px',
      }} >
        {technologies?.map(({ alt, src, }, index) => (
          <div key={`${index}-${alt}`} style={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            alignItems: 'center'
          }} >
            <div style={{
              width: '100px',
              height: '100px',
              overflow: 'hidden',
              borderRadius: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
              <img src={src} alt={alt} style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
              }} />
            </div>
            <span>{alt}</span>
          </div>
        ))}
      </div>
    </HomeSectionContainer>
  )
}
