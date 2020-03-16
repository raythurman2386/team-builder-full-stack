import { useState } from 'react'

export const useToggle = () => {
  const [value, setValue] = useState(false)

  const handleChange = () => {
    setValue(!value)
  }

  return [value, handleChange]
}
