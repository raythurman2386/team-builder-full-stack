import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  const handleEdit = id => {
    const checkValues = storedValue.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isEditable: !item.isEditable,
        }
      }

      return item
    })
    localStorage.setItem(storedValue, JSON.stringify(checkValues))
  }

  const handleDelete = id => {
    let filteredList = storedValue.filter(item => item.id !== id)

    setValue(filteredList)
  }

  return [storedValue, setValue, handleDelete, handleEdit]
}
