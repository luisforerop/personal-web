import { useGetProjects } from '../../../shared'
import { HomeSectionContainer } from '../../common'
import { ProjectCard } from './components/ProjectCard'

export const Projects = () => {
  const projects = useGetProjects()

  return (
    <HomeSectionContainer sectionTitle='Proyectos destacados' >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', // repeat min max
        gap: '16px'
      }}>
        {projects?.map((project, index) => (
          <ProjectCard {...project} key={`${index}-${project.name}`} />
        ))}
      </div>
    </HomeSectionContainer>
  )
}
