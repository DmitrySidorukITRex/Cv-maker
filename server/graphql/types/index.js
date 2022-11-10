const { gql } = require('apollo-server-express');

const userTypes = `
  type User {
    _id: ID
    avatar: String
    username: String
    name: String
    email: String
    role: String
  }

  input SignUpInput {
    avatar: String
    username: String!
    name: String,
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;

const typeDefs = gql`
  ${userTypes}

  type Query {
    user: User
  }

  type Mutation {
    signUp(input: SignUpInput): String
    signIn(input: SignInInput): User
    signOut: Boolean
  }
`;

module.exports = { typeDefs };
