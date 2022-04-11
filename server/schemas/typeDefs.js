//file for defining every piece of data that client can expect to work with throught a query or mutation
// think of this file as defining the API endpoint + the exact data and parameters tied to that endpoint

// import gql tagged template fx
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedKast: [Kast]
        # tasks: [Task]
    }
    type Kast {
        kastId: String
        kastText: String
    }
    # instructing tasks query so that each task returns this info
    type Task {
        _id: ID
        taskText: String
        completed: Boolean
        createdAt: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String): User
        tasks: [Task]!
        getTask(_id: String!): Task
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addTask(taskText: String!): Task
        removeTask(_id: ID!): Task
        saveKast(kastId: String!, kastText: String): User
        removeKast(kastId: String!): User
    }
`;

module.exports = typeDefs;
