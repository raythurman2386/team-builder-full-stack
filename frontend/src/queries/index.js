import { gql } from 'apollo-boost';

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
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

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
`;

export const GET_TECHS = gql`
  {
    techs {
      id
      name
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($machine: String!, $complaint: String!, $tech_id: ID!) {
    addJob(machine: $machine, complaint: $complaint, tech_id: $tech_id) {
      id
      machine
      complaint
      tech {
        name
      }
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJob(
    $id: ID!
    $machine: String!
    $complaint: String!
    $tech_id: ID!
  ) {
    updateJob(
      id: $id
      machine: $machine
      complaint: $complaint
      tech_id: $tech_id
    ) {
      id
      machine
      complaint
      tech {
        name
      }
    }
  }
`;

export const DELETE_JOB = gql`
  mutation deleteJob($id: ID!) {
    deleteJob(id: $id) {
      id
    }
  }
`;

export const ADD_TECH = gql`
  mutation addTech($name: String!) {
    addTech(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_TECH = gql`
  mutation updateTech($id: ID!, $name: String!) {
    updateTech(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_TECH = gql`
  mutation deleteTech($id: ID!) {
    deleteTech(id: $id) {
      id
    }
  }
`;

export const INITIATE = gql`
  mutation initiateReset($email: String!) {
    initiateReset(email: $email)
  }
`;

export const VALIDATE = gql`
  mutation validateReset($email: String!, $password: String!) {
    validateReset(email: $email, password: $password)
  }
`;
