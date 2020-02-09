import { useState } from "react"

const useToggle = () => {
  const [value, setValue] = useState(false)

  const handleChange = () => {
    setValue(!value)
  }

  return [value, handleChange]
}

export default useToggle
