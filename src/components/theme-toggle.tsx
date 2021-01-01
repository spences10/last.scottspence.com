import React from 'react'
import { GiStripedSun } from 'react-icons/gi'
import { Box } from 'theme-ui'
import { useThemeValues } from '../hooks/theme-values'

export default function ThemeToggle() {
  const { modeSet, newColorMode } = useThemeValues()

  return (
    <Box
      as="button"
      role="theme-toggle"
      onClick={() => {
        modeSet(newColorMode)
      }}
      sx={{
        height: 50,
        width: 50,
        background: 'none',
        border: 'none',
        borderRadius: 50,
        svg: { height: '100%', width: '100%' },
      }}
    >
      <GiStripedSun />
    </Box>
  )
}
