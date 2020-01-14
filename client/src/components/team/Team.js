import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

// Team member
import TeamMember from './TeamMember'
import { useAnimation } from '../../hooks/useAnimation'
import Axios from 'axios'

const Team = props => {
  const { linkAnimation } = useAnimation()

  const handleDelete = id => {
    Axios.delete(`http://127.0.0.1:5000/api/users/${id}`)
      .then(res => {
        let updatedTeam = props.teamList.filter(member => member.id !== id)
        props.setTeamList(updatedTeam)
      })
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
