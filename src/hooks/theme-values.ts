import { useColorMode, useThemeUI } from 'theme-ui'

export const useThemeValues = () => {
  const [mode, modeSet] = useColorMode()
  const { theme } = useThemeUI()
  const { initialColorMode } = theme
  const modes = Object.keys(theme.colors?.modes)
  const allModes = [initialColorMode, ...modes]
  const index = allModes.indexOf(mode)
  const nextIndex = (index + 1) % allModes.length
  const newColorMode = allModes[nextIndex]

  return {
    theme,
    mode,
    modeSet,
    modes,
    nextIndex,
    newColorMode,
  }
}
