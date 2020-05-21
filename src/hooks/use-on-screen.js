import { useEffect, useState } from 'react'

export const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, isIntersectingSet] = useState(false)

  useEffect(() => {
    const effectRef = ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        isIntersectingSet(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (effectRef.current) {
      observer.observe(effectRef.current)
    }
    return () => {
      observer.unobserve(effectRef.current)
    }
  })

  return isIntersecting
}
