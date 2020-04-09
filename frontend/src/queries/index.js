import { gql } from 'apollo-boost';

export const REGISTER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      accessToken
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
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
    $tech_id: Int!
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
