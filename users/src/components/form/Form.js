import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Field, withFormik } from 'formik'
import { animated } from 'react-spring'
import * as Yup from 'yup'
import { useAnimation } from '../../hooks/useAnimation'

const TeamForm = ({
  errors,
  touched,
  status,
  teamList,
  setTeamList,
  history,
}) => {
  const { linkAnimation } = useAnimation()
  // set the values to state from app
  useEffect(() => {
    if (status) {
      setTeamList([
        ...teamList,
        { id: Date.now(), isEditable: false, ...status },
      ])
      history.push('/')
    }
  }, [status])

  return (
    <Wrapper style={linkAnimation}>
      <FormWrapper>
        {/* Custom Errors */}
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Input type='text' name='name' placeholder='Name' required />

        {touched.email && errors.email && <p>{errors.email}</p>}
        <Input type='email' name='email' placeholder='Email' required />

        {touched.role && errors.role && <p>{errors.role}</p>}
        <Input type='text' name='role' placeholder='Role' required />
        <ButtonWrapper type='submit'>Submit</ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

export default withFormik({
  mapPropsToValues: ({ name, email, role }) => {
    return {
      name: name || '',
      email: email || '',
      role: role || '',
    }
  },

  // Validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please provide your name.'),
    email: Yup.string()
      .email('Please provide your email.')
      .required(),
    role: Yup.string().required('Please provide your role.'),
  }),

  // handleSubmit
  handleSubmit(values, { setStatus }) {
    // console.log(values)
    setStatus(values)
  },
})(TeamForm)

const Wrapper = styled(animated.div)`
  max-width: 1120px;
  margin: 60px auto 0;
`

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`

const Input = styled(Field)`
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
