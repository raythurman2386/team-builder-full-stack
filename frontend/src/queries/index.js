import { gql } from "apollo-boost"

export const SIGN_UP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`

export const GET_JOBS = gql`
  {
    jobs {
      id
      machine
      complaint
      tech {
        name
      }
    }
  }
`

export const GET_TECHS = gql`
  {
    techs {
      id
      name
    }
  }
`

export const ADD_JOB = gql`
mutation addJob($machine: String!, $complaint: String!, $tech_id: ID!){
  addJob(machine: $machine, complaint: $complaint, tech_id: $tech_id){
    id
    machine
    complaint
    tech {
      name
    }
  }
}
`;
