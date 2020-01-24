/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobItem from './JobItem'
import Placeholder from './Placeholder'
import { TeamWrapper } from './Jobs'
import { useAnimation } from '../../hooks/useAnimation'

const TechsJobs = ({ match }) => {
  const { linkAnimation } = useAnimation()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://team-builder-pg.herokuapp.com/api/technicians/${match.params.id}/jobs`
      )
      .then(res => setJobs(res.data))
      .catch(err => console.log(err))
  }, [match.params.id])

  return (
    <TeamWrapper style={linkAnimation}>
      {jobs.length === 0 && <Placeholder />}
      {jobs && jobs.map(job => <JobItem key={job.id} job={job} />)}
    </TeamWrapper>
  )
}

export default TechsJobs
