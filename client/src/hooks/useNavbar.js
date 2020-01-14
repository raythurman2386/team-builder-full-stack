import { useState } from 'react'

export const useNavbar = () => {
  const [bool, setBool] = useState(false)

  const handleNavbar = () => {
    setBool(!bool)
  }

  return [bool, handleNavbar]
}
