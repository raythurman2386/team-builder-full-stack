import React, { useState } from 'react'
import styled from 'styled-components'
import { useAnimation } from '../../hooks/useAnimation'

const AddJob = () => {
  const { linkAnimation } = useAnimation()
  const [machine, setMachine] = useState('')
  const [complaint, setComplaint] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <FormWrapper onSubmit={e => handleSubmit(e)} style={linkAnimation}>
      <h2>Add a New Job</h2>
      <Input
        type='text'
        name='machine'
        placeholder='Machine'
        value={machine}
        onChange={e => setMachine(e.target.value)}
        required
      />
      <Input
        type='text'
        name='complaint'
        placeholder='Complaint'
        value={complaint}
        onChange={e => setComplaint(e.target.value)}
        required
      />
      {/* TODO: Date */}
      {/* TODO: Technician */}
      <ButtonWrapper type='submit'>Submit</ButtonWrapper>
    </FormWrapper>
  )
}

export default AddJob

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Input = styled.input`
  margin: 10px 0;
  line-height: 2;
  border: none;
  // border-radius: 8px;
  padding: 5px 10px;
  width: 60%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 8px 14px;
  background-color: lightskyblue;
  border: none;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 -1px 10px #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 10px rgba(0, 0, 0, 0.24);
  }
`
