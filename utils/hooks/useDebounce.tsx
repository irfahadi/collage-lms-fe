import { useState, useEffect } from 'react'

export function useDebounceSearch(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Set a timer to update the debounced value after the delay time
    const timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clean up the timer if the value or delay changes before the timer completes
    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])

  return debouncedValue
}
