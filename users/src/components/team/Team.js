import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

// Team member
import TeamMember from './TeamMember'
import { useAnimation } from '../../hooks/useAnimation'

const Team = props => {
  const { linkAnimation } = useAnimation()

  if (props.teamList.length === 0) {
    props.history.push('/no-members')
  }

  return (
    <TeamWrapper style={linkAnimation}>
      {props.teamList &&
        props.teamList.map((team, index) => (
          <TeamMember
            key={index}
            member={team}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
          />
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
