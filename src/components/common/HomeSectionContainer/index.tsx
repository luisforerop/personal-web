import type { FC, PropsWithChildren } from 'react'
import commonStyles from '../../../../styles/CommonStyles.module.css'

interface HomeSectionContainerProps extends PropsWithChildren{
  sectionTitle?: string 
}

export const HomeSectionContainer: FC<HomeSectionContainerProps> = ({ children, sectionTitle }) => {
  return (
    <section className={commonStyles.homeSection}>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      {children}
    </section>
  )
}
