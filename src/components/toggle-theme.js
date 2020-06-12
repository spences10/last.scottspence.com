import React, { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'
import moon from '../../static/moon.svg'
import sun from '../../static/sun.svg'

export const ToggleTheme = () => {
  const { toggle, value } = useDarkMode()
  const [image, imageSet] = useState(``)
  useEffect(() => {
    value ? imageSet(sun) : imageSet(moon)
  }, [value])
  return (
    <button
      id="dark-mode-toggler"
      aria-label={
        value ? 'Switch to light mode' : 'Switch to dark mode'
      }
      onClick={toggle}
    >
      <img
        src={image}
        alt={`Toggle ${value ? `light` : `dark`}  mode`}
      />
    </button>
  )
}
