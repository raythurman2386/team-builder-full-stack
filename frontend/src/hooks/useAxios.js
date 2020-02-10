import { useState, useEffect } from "react"
import { axiosWithAuth as axios } from "../utils/axiosConfig"

export const useAxios = (name, url) => {
  const item = JSON.parse(localStorage.getItem(name))
  const [value, setValue] = useState(item)

  useEffect(() => {
    axios()
      .get(url)
      .then(res => {
        setValue(res.data)
        localStorage.setItem(name, JSON.stringify(res.data))
      })
      .catch(err => console.log(err.response))
  }, [name, url])

  return [value, setValue]
}
