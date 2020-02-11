import axios from "axios"

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://team-builder-pg.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
}
