import type { FC, PropsWithChildren } from 'react'

interface LinkButtonProps extends PropsWithChildren {
  href: string
}

export const LinkButton: FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <a  style={{
      borderRadius: '4px',
      border: '1px solid',
      padding: '4px 12px'

    }} href={href}>
      {children}
    </a>
  )
}
