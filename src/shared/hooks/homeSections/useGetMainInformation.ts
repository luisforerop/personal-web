import { useEffect, useState } from 'react';

export interface IImageSrc {
  src: string
  alt: string
}

interface IImageData extends IImageSrc {
  href?: string
}

interface IUserInformation {
  userName: string
  userImage: IImageData
  rol: string
  description: string
  icons: IImageData[]
}

const defaultUserInformation: IUserInformation = {
  userName: 'Luis Felipe Forero Peñaloza',
  rol: 'Frontend developer',
  description: 'Ex ingeniero mecánico apasionado por la tecnología. Actualmente trabajo para crear valor en la industria del ecommerce.',
  userImage: {
    alt: 'LuisFe',
    src: 'https://img.shields.io/badge/-🥷-111820?style=flat&logoColor=white',
    href: '#'
  },
  icons: [
    {
      src: 'https://img.shields.io/badge/-LinkendIn-0072b1?style=flat&logo=Linkedin&logoColor=white',
      href: 'https://www.linkedin.com/in/luisforerop',
      alt: 'Linkedin Badge'
    },
    {
      src: 'https://img.shields.io/badge/-Mr%20components-111820.svg?&style=flat&logo=Google-Chrome&logoColor=white',
      href: 'https://mr-components.com',
      alt: 'Website Badge'
    },
    {
      src: 'https://img.shields.io/badge/-Instagram-C13584?style=flat&logo=Instagram&logoColor=white',
      href: 'https://www.instagram.com/luis_forerop',
      alt: 'Instagram Badge'
    },
    {
      src: 'https://img.shields.io/badge/-Twitter-00acee?style=flat&logo=Twitter&logoColor=white',
      href: 'https://twitter.com/intent/follow?screen_name=luis_forerop',
      alt: 'Twitter Badge'
    },
    {
      src: 'https://img.shields.io/badge/-Gmail-c14438?style=flat&logo=Gmail&logoColor=white',
      href: 'mailto:infoluisforerop@gmail.com',
      alt: 'Gmail Badge'
    },
    {
      src: 'https://img.shields.io/badge/-Telegram-0088CC?style=flat&logo=Telegram&logoColor=white',
      href: 'https://t.me/luis_forerop',
      alt: 'Telegram Badge'
    },
  ]
}

export const useGetMainInformation = () => {
  const [userInformation, setUserInformation] = useState<IUserInformation | null>(null)
  
  useEffect(() => {
    setUserInformation(defaultUserInformation)
  }, [])
  
  
  return userInformation
}
