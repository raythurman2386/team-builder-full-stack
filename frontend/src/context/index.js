import React from "react"
import { useAxios } from "../hooks/useAxios"
import { useToggle } from "../hooks/useToggle"
import { TechProvider, JobProvider, MessageProvider, LoadingProvider } from "../context/context"

const Context = ({ children }) => {
  const [techs, setTechs] = useAxios("techs", "/technicians")
  const [jobs, setJobs] = useAxios("jobs", "/jobs")
  const [loading, handleLoading] = useToggle()
  const [message, setMessage] = React.useState(
    localStorage.getItem("message") || ""
  )

  return (
    <TechProvider value={{ techs, setTechs }}>
      <JobProvider value={{ jobs, setJobs }}>
        <MessageProvider value={{ message, setMessage }}>
          <LoadingProvider value={{ loading, handleLoading }}>
            {children}
          </LoadingProvider>
        </MessageProvider>
      </JobProvider>
    </TechProvider>
  )
}

export default Context
