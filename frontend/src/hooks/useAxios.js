import { useState, useEffect } from "react"
import { axiosWithAuth as axios } from "../utils/axiosConfig"

export const useAxios = url => {
  const [value, setValue] = useState()

  useEffect(() => {
    axios()
      .get(url)
      .then(res => setValue(res.data))
      .catch(err => console.log(err.response))
  }, [url])

  return [value, setValue]
}
