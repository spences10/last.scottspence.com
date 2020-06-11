import React from 'react'
import useDarkMode from 'use-dark-mode'
import moon from '../../static/moon.svg'
import sun from '../../static/sun.svg'

export const ToggleTheme = () => {
  const darkMode = useDarkMode()

  return (
    <button
      id="dark-mode-toggler"
      aria-label={
        darkMode.value
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      onClick={darkMode.toggle}
    >
      {darkMode.value ? (
        <img src={sun} alt="toggle light mode" />
      ) : (
        <img src={moon} alt="toggle dark mode" />
      )}
    </button>
  )
}
