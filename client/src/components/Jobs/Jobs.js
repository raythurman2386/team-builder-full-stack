import React, { useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { animated } from 'react-spring'

// Team member
import TeamMember from './JobItem'
import { useAnimation } from '../../hooks/useAnimation'

const Team = props => {
  const { linkAnimation } = useAnimation()

  useEffect(() => {
    Axios.get('http://127.0.0.1:4000/api/jobs/')
      .then(res => {
        console.log(res.data)
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
      {props.teamList &&
        props.teamList.map((team, index) => (
          <TeamMember key={index} member={team} handleDelete={handleDelete} />
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
  margin: auto;
  width: 100%;
`
