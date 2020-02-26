import React, { createContext, useReducer } from "react"
import AppReducer from "../reducer"
import { axiosWithAuth as axios } from "../utils/axiosConfig"

// Initial state
const initialState = {
  jobs: [],
  techs: [],
  message: "",
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  async function getJobs() {
    try {
      const res = await axios().get("/api/jobs")
      dispatch({
        type: "GET_JOBS",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "JOB_ERROR",
        payload: err.response.data.error
      })
    }
  }

  async function deleteJob(id) {
    try {
      await axios().delete(`/api/jobs/${id}`)
      dispatch({
        type: "DELETE_JOB",
        payload: id
      })
    } catch (err) {
      dispatch({
        type: "JOB_ERROR",
        payload: err.response.data.error
      })
    }
  }

  async function addJob(job) {
    try {
      const res = await axios().post("/api/jobs", job)
      dispatch({
        type: "ADD_JOB",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "JOB_ERROR",
        payload: err.response.data.error
      })
    }
  }

  async function getTechs() {
    try {
      const res = await axios().get("/api/techs")
      dispatch({
        type: "GET_TECHS",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "TECH_ERROR",
        payload: err.response.data.error
      })
    }
  }

  async function deleteTech(id) {
    try {
      await axios().delete(`/api/techs/${id}`)
      dispatch({
        type: "DELETE_TECH",
        payload: id
      })
    } catch (err) {
      dispatch({
        type: "TECH_ERROR",
        payload: err.response.data.error
      })
    }
  }

  async function addTech(tech) {
    try {
      const res = await axios().post("/api/techs", tech)
      dispatch({
        type: "ADD_TECH",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "TECH_ERROR",
        payload: err.response.data.error
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        techs: state.techs,
        message: state.message,
        error: state.error,
        loading: state.loading,
        getJobs,
        deleteJob,
        addJob,
        getTechs,
        deleteTech,
        addTech
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
