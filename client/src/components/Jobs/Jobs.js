import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { animated } from 'react-spring'
import JobItem from './JobItem'
import { useAnimation } from '../../hooks/useAnimation'

const Team = props => {
  const { linkAnimation } = useAnimation()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    Axios.get('http://127.0.0.1:4000/api/jobs/')
      .then(res => {
        console.log(res.data)
        setJobs(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = id => {
    Axios.delete(`http://127.0.0.1:4000/api/jobs/${id}`)
      .then()
      .catch(err => console.log(err))
  }

  return (
    <TeamWrapper style={linkAnimation}>
      {jobs &&
        jobs.map((job) => (
          <JobItem key={job.id} job={job} handleDelete={handleDelete} />
        ))}
    </TeamWrapper>
  )
}

export default Team

const TeamWrapper = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 20rem;
  margin: 5rem auto;
  width: 100%;
`
