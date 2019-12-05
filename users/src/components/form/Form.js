import React, { useState } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { useAnimation } from "../../hooks/useAnimation";
import Axios from "axios";

const TeamForm = ({ teamList, setTeamList, history }) => {
  const { linkAnimation } = useAnimation();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      bio
    };

    Axios.post("http://127.0.0.1:5000/api/users", newUser)
      .then(res => setTeamList([...teamList, newUser]))
      .then(() => history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <Wrapper style={linkAnimation}>
      <FormWrapper onSubmit={e => handleSubmit(e)}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          name="bio"
          placeholder="Bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
          required
        />
        <ButtonWrapper type="submit">Submit</ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default TeamForm;

const Wrapper = styled(animated.div)`
  max-width: 1120px;
  margin: 60px auto 0;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  line-height: 2;
  border: none;
  // border-radius: 8px;
  padding: 5px 10px;
  width: 60%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

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
`;
