const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Run {
    id: ID!
    instrument: String!
    assay: String!
    trays: String!
    createdAt: String!
    username: String
    comments: [Comment]
  }
  type Comment{
      id: ID!
      createdAt: String!
      username: String!
      body: String!
  }

  type Like{
      id: ID!
      createdAt: String!
      username: String!

  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
    
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getRuns: [Run]
    getRun(runId: ID!): Run
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createRun(instrument: String!, assay: String!, trays: String!, username: String!): Run!
    deleteRun(runId: ID!): String!
  }
  
`;
