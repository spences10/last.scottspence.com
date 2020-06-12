import React from 'react'
import useDarkMode from 'use-dark-mode'
import moon from '../../static/moon.svg'
import sun from '../../static/sun.svg'

export const ToggleTheme = () => {
  const { toggle, value } = useDarkMode()

  return (
    <button
      id="dark-mode-toggler"
      aria-label={
        value ? 'Switch to light mode' : 'Switch to dark mode'
      }
      onClick={toggle}
    >
      {value ? (
        <img src={sun} alt="toggle light mode" />
      ) : (
        <img src={moon} alt="toggle dark mode" />
      )}
    </button>
  )
}
