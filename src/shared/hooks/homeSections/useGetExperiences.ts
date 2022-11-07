import {useEffect, useState} from 'react'

interface IExperience  {
  rol: string
  companyName: string
  companyLocation: string
  startDate: string
  endDate: string
  achievements: string[]
}

const defaultExperience = [
  {
    rol: 'Analista de desarrollo',
    companyName: 'Xpert Group',
    companyLocation: 'Remoto',
    startDate: 'Sep. 2021',
    endDate: 'Actualidad',
    achievements: [
      'Migración de marketplace de Vtex legacy a Vtex IO, basado en React, node JS y Typescript.',
      'Creación de un scrapper para automatizar procesos de configuración del marketplace utilizando playwright (iniciativa propia).',
      'Desarrollo del módulo de órdenes del marketplace.',
      'Desarrollo y mantenimiento producto SOAT Puntos Colombia.',
      'Participación en la iniciativa de rediseño del marketplace.',
      'Apoyo con el liderazgo técnico del equipo durante dos semanas.'
    ]
  }
]

export const useGetExperiences = () => {
  const [experiences, setExperiences] = useState<IExperience[] | null>(null)
  
  useEffect(() => {
    setExperiences(defaultExperience)
  }, [])
  
  
  return experiences
}
