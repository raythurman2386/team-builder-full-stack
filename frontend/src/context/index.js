import React, { createContext, useReducer } from "react"
import AppReducer from "../reducer"
import axios from "axios"

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
      const res = await axios.get("/api/jobs")
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
      await axios.delete(`/api/jobs/${id}`)
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
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.post("/api/jobs", job, config)
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

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        techs: state.techs,
        message: state.message,
        error: state.error,
        loading: state.loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
