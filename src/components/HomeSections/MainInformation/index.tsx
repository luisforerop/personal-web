import { HomeSectionContainer } from '../../common'
import { useGetMainInformation } from '../../../shared/hooks/homeSections/useGetMainInformation';

export const MainInformation = () => {
  const { description, icons, rol, userName, userImage } = useGetMainInformation() ?? {}
  return (
    <HomeSectionContainer>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px'
      }} >
        <div>
          <h1>{userName}</h1>
          <p>{rol}</p>
          <p>{description}</p>
        </div>
        <div>
          <img alt={userImage?.alt} src={userImage?.src} height="120px" />
        </div>
      </div>
      <ul style={{
        margin: '0',
        display: 'flex',
        gap: '8px',
        padding: '0'
      }} >
        {icons?.map(({ alt, src, href, }, index) => (
          <li key={`${index}-${alt}`} style={{
            margin: '0',
            listStyle: 'none',
          }} >
            <a href={href}>
              <img alt={alt} src={src} />
            </a>
          </li>
        ))}
      </ul>
    </HomeSectionContainer>
  )
}

export default MainInformation