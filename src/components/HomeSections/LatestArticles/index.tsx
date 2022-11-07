import { useGetLatestArticles } from '../../../shared/hooks'
import { HomeSectionContainer } from '../../common'

export const LatestArticles = () => {
  const articles = useGetLatestArticles()
  return (
    <HomeSectionContainer sectionTitle='Últimos artículos' >
      {articles?.map(({title, description, url,}, index) => <article key={index} >
        <h3>{title}</h3>
        <p>{description}<a href={url}>Ver más...</a> </p>
      </article> )}
    </HomeSectionContainer>
  )
}
