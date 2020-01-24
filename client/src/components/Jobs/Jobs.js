import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { animated } from 'react-spring'
import JobItem from './JobItem'
import { useAnimation } from '../../hooks/useAnimation'

const Team = () => {
  const { linkAnimation } = useAnimation()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    Axios.get('https://team-builder-pg.herokuapp.com/api/jobs/')
      .then(res => {
        setJobs(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = id => {
    const newJobs = jobs.filter(job => job.id !== id)
    Axios.delete(`https://team-builder-pg.herokuapp.com/api/jobs/${id}`)
      .then(res => setJobs(newJobs))
      .catch(err => console.log(err))
  }

  return (
    <TeamWrapper style={linkAnimation}>
      {jobs &&
        jobs.map(job => (
          <JobItem key={job.id} job={job} handleDelete={handleDelete} />
        ))}
    </TeamWrapper>
  )
}

export default Team

export const TeamWrapper = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`
