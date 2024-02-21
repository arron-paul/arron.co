'use client'

import React, { useEffect } from 'react'

interface CoverPhotoProps {
  src: string
  alt: string
}

const CoverPhoto: React.FC<CoverPhotoProps> = ({ src, alt }) => {
  useEffect(() => {
    // todo: logic for shifting content below the fixed cover photo
  }, [])

  return (
    <picture className="fixed top-0 left-0 right-0 w-full -z-10 flex justify-center">
      <img src={src} alt={alt} />
    </picture>
  )
}

export default CoverPhoto
