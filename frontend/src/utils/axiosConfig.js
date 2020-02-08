import axios from "axios"

export const axiosWithAuth = () => {
  return axios.create({
    baseUrl: "http://localhost:4000/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
}
