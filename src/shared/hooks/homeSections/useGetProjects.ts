import { useState, useEffect } from 'react'
import { IImageSrc } from '.'

export interface IProject {
  name: string
  image: IImageSrc
  repoLink: string
  demoLink: string
  description: string
}

const defaultProjects = [
  {
    name: 'Musicfy',
    image: {
      src: 'https://areaf5.es/wp-content/uploads/2018/09/wireframes.jpg',
      alt: 'Musicfy demo'
    },
    repoLink: 'https://github.com/luisforerop/musicfy',
    demoLink: 'https://github.com/luisforerop/musicfy',
    description: 'A music app developed in 3 days for a tech test.'
  },
  {
    name: 'Coffe project',
    image: {
      src: 'https://areaf5.es/wp-content/uploads/2018/09/wireframes.jpg',
      alt: 'Coffe project demo'
    },
    repoLink: 'https://github.com/luisforerop/coffee-project',
    demoLink: 'https://github.com/luisforerop/coffee-project',
    description: 'The classic rest server using typescript and express'
  },
  {
    name: 'Conecta',
    image: {
      src: 'https://areaf5.es/wp-content/uploads/2018/09/wireframes.jpg',
      alt: 'Conecta demo'
    },
    repoLink: 'https://github.com/luisforerop/conecta',
    demoLink: 'https://github.com/luisforerop/conecta',
    description: 'Marketplace for asylums and nursing homes.'
  },
]

export const useGetProjects = () => {
  const [projects, setProjects] = useState<IProject[] | null>(null)

  useEffect(() => {
    setProjects(defaultProjects)
  }, [])
  

  return projects
}
