'use client'

import styles from "./styles.module.css"
import React, { useState, useEffect } from 'react'

const FancyCursor = () => {
  const [position, setPosition] = useState({ x: -10000, y: -10000 })
  const [opacity, setOpacity] = useState({ alpha: 1 })
  const [isPointer, setIsPointer] = useState(false)

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setIsPointer(
      window.getComputedStyle(e.target).getPropertyValue('cursor') ===
        'pointer',
    )
  }

  const handleBlur = (e: any) => {
    setOpacity({ alpha: 0 })
    setIsPointer(false)
  }

  const handleEnter = (e: any) => {
    setOpacity({ alpha: 1 })
    setIsPointer(true)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleEnter)
    window.addEventListener('mouseout', handleBlur)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleEnter)
      window.removeEventListener('mouseout', handleBlur)
    }
  }, [])

  const flareSize = isPointer ? 0 : 0

  const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {}

  return (
    <div
      className={`${styles.cursor} ${isPointer ? 'pointer' : ''}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        opacity: `${opacity.alpha}`,
      }}></div>
  )
}

export default FancyCursor
