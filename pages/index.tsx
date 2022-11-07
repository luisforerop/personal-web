import { Fragment } from 'react'
import {
  ContactMe,
  Experience,
  LatestArticles,
  MainInformation,
  Projects,
  TechnicalSkills
} from '../src/components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <MainInformation />
      <LatestArticles />
      <Projects />
      <Experience />
      <TechnicalSkills />
      <ContactMe />
    </Fragment>
  )
}
