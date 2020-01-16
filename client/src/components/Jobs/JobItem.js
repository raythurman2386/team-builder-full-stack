import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TeamMember = ({ job, handleDelete }) => {
  return (
    <TeamMemberCard>
      <h1>{job.machine}</h1>
      <h2>{job.complaint}</h2>
      <h2>{job.name}</h2>
      <StyledLink to={`/update-member/${job.id}`}>Edit</StyledLink>
      <button onClick={id => handleDelete(job.id)}>Delete</button>
    </TeamMemberCard>
  )
}

export default TeamMember

const TeamMemberCard = styled.div`
  width: 250px;
  min-height: 250px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 0 10px 6px -6px #777;
  margin: 2rem auto;
  :hover {
    box-shadow: 0 10px 16px -6px #777;
    transition: 0.4s ease;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
    margin: 2rem 0;
    width: 80%;
    overflow: hidden;
    word-wrap: normal;
  }

  button {
    padding: 6px 12px;
    margin-left: 10px;
    font-size: 1.4rem;
    font-weight: 500;
    width: 80%;
    border: none;
    box-shadow: 0 5px 5px #777;
    cursor: pointer;
    background-color: #333;
    color: white;
    :hover {
      color: #fdcb6e;
      border-bottom: .5px solid #fdcb6e;
      transition: 0.5s ease;
    }
  }
`
const StyledLink = styled(Link)`
  padding: 6px 12px;
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  width: 80%;
  border: none;
  box-shadow: 0 5px 5px #777;
  cursor: pointer;
  background-color: #333;
  color: white;
  :hover {
    color: #fdcb6e;
    border-bottom: 0.5px solid #fdcb6e;
    transition: 0.5s ease;
  }
`
