// https://www.youtube.com/watch?v=BAf0uhKVHBk
import { useEffect, useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [value, valueSet] = useState(() => {
    if (typeof window === 'undefined') {
      // console.log(`We SSR yo!`)
      return
    }

    const storedValue = localStorage.getItem(key)
    return storedValue === null
      ? defaultValue
      : JSON.parse(storedValue)
  })

  useEffect(() => {
    const listener = e => {
      if (e.storedArea === localStorage && e.key === key) {
        valueSet(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [key])

  const setValueInLocalStorage = newValue => {
    valueSet(currentValue => {
      const result =
        typeof newValue === 'function'
          ? newValue(currentValue)
          : newValue
      localStorage.setItem(key, JSON.stringify(result))
      return result
    })
  }

  return [value, setValueInLocalStorage]
}
