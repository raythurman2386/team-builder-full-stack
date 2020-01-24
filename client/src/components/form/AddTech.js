import React, { useState } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import axios from 'axios'
import { useAnimation } from '../../hooks/useAnimation'

const AddTech = () => {
  const { linkAnimation } = useAnimation()
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('https://team-builder-pg.herokuapp.com/api/technicians', { name })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <Wrapper style={linkAnimation}>
      <FormWrapper onSubmit={e => handleSubmit(e)}>
        <h2>Add a Technician</h2>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <ButtonWrapper type='submit'>Submit</ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

export default AddTech

const Wrapper = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  align-items: center;
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
