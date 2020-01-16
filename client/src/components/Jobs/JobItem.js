import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import elevation from '../../styles/elevation'

const TeamMember = ({ job, handleDelete }) => {
  return (
    <TeamMemberCard>
      <h1>{job.machine}</h1>
      <h2>Complaint: {job.complaint}</h2>
      <h2>Tech: {job.name}</h2>
      <StyledLink to={`/update-member/${job.id}`}>Edit</StyledLink>
      <button onClick={id => handleDelete(job.id)}>Completed</button>
    </TeamMemberCard>
  )
}

export default TeamMember

const TeamMemberCard = styled.div`
  box-sizing: border-box;
  width: 250px;
  min-height: 250px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  ${elevation[1]}
  margin: 2rem auto;
  :hover {
    ${elevation[4]}
    transition: 0.4s ease;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
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
    ${elevation[1]}
    cursor: pointer;
    background-color: #333;
    border-bottom: 0.5px solid #333;
    color: white;
    :hover {
      color: #fdcb6e;
      border-bottom: 0.5px solid #fdcb6e;
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
  ${elevation[1]}
  cursor: pointer;
  background-color: #333;
  color: white;
  border-bottom: 0.5px solid #333;
  :hover {
    color: #fdcb6e;
    border-bottom: 0.5px solid #fdcb6e;
    transition: 0.5s ease;
  }
`
