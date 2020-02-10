import React from "react"
import { useAxios } from "../hooks/useAxios"
import { TechProvider, JobProvider, MessageProvider } from "../context/context"

const Context = ({ children }) => {
  const [techs, setTechs] = useAxios(
    "techs",
    "http://localhost:4000/api/technicians"
  )
  const [jobs, setJobs] = useAxios("jobs", "http://localhost:4000/api/jobs")
  const [message, setMessage] = React.useState(
    localStorage.getItem("message") || ""
  )

  return (
    <TechProvider value={{ techs, setTechs }}>
      <JobProvider value={{ jobs, setJobs }}>
        <MessageProvider value={{ message, setMessage }}>
          {children}
        </MessageProvider>
      </JobProvider>
    </TechProvider>
  )
}

export default Context
