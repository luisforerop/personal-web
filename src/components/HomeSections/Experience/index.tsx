import React from 'react'
import { useGetExperiences } from '../../../shared'
import { HomeSectionContainer } from '../../common'

export const Experience = () => {
  const experiences = useGetExperiences()
  return (
    <HomeSectionContainer sectionTitle='Mi experiencia' >
      <ol style={{
        width: '100%',
        maxHeight: '160px',
        backgroundColor: 'beige',
        borderRadius: '8px',
        padding: '16px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }} >
        {experiences?.map(({ achievements, companyLocation, companyName, endDate, rol, startDate, }, index) => (
          <li key={index} style={{
            listStyle: 'none'
          }} >
            <h3>{rol}</h3>
              <div>
                <span>{companyName}</span>
                <span>{companyLocation}</span>
              </div>
              <div>
                <span>{startDate}</span> - <span>{endDate}</span>
              </div>
              <h4>Logros</h4>
              <ul>
                {achievements.map((achievement, index) => <li key={`Achievement ${index}`} >{achievement}</li> )}
              </ul>
          </li>
        ))}
      </ol>
    </HomeSectionContainer>
  )
}
