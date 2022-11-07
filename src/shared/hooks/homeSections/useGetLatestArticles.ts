import React, { useEffect, useState } from 'react'

interface ILatestArticles {
  title: string;
  url: string;
  description: string;
}

const articles = [
  {
    title: '¡Un dramaturgo me ayudó a salir a producción!',
    url: 'https://www.mr-components.com/blog/playwright-para-automatizar-procesos',
    description: 'Si quieres saber cómo un dramaturgo me facilitó la vida en mi primera salida a producción y lo que aprendí sobre el proceso, acompáñame hasta el final de este post.'
  },
  {
    title: '6 cosas a tener en cuenta para iniciar en el mundo de la programación',
    url: 'https://www.mr-components.com/blog/6-tips-para-iniciar-a-programar',
    description: 'Cursar un programa universitario para dedicarse profesionalmente a la programación es una alternativa, pero para quienes no tenemos los suficientes recursos y/o tiempo, el aprendizaje autónomo es la mejor opción. Aquí te presento 6 cosas que debes tener en cuenta antes de comenzar.'
  }
]

export const useGetLatestArticles = () => {
  const [latestArticles, setLatestArticles] = useState<ILatestArticles[] | null>(null)

  useEffect(() => {
    setLatestArticles(articles)
  }, [])


  return latestArticles
}
