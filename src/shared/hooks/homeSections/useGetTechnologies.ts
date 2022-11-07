import React, { useEffect, useState } from 'react'
import { IImageSrc } from '.'

const defaultTechs = [
  {
    src: 'https://ionicframework.com/docs/icons/logo-react-icon.png',
    alt: 'React'
  },
  {
    src: 'https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png',
    alt: 'Next JS'
  },
  {
    src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    alt: 'Git'
  },
  {
    src: 'https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png',
    alt: 'Node js'
  },
  {
    src: 'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png',
    alt: 'Express js'
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/512/919/919832.png',
    alt: 'Typescript'
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1414659268318568450/eQPmgbFO_400x400.jpg',
    alt: 'Vtex IO'
  },
]

export const useGetTechnologies = () => {
  const [technologies, setTechnologies] = useState<IImageSrc[] | null>(null)

  useEffect(() => {
    setTechnologies(defaultTechs)
  }, [])


  return technologies
}
