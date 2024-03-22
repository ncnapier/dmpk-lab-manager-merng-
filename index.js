const { ApolloServer, AuthenticationError } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs =require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB, SECRET_KEY } = require('./config');
const jwt = require('jsonwebtoken');



// const  checkAuth  = require('./util/check-auth');






const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
    req
    //   const authHeader = req.headers.authorization;
    //   if (authHeader) {
    //     const token = authHeader.split('Bearer ')[1];
    //     if (token) {
    //       try {
    //         const user = jwt.verify(token, SECRET_KEY);
    //         return { user };
    //       } catch (err) {
    //         throw new AuthenticationError('Invalid/Expired token');
    //       }
    //     }
    //     throw new AuthenticationError('Authentication token must be provided');
    //   }
    //   return {};
    }),
  });
  

mongoose.connect(MONGODB, { useNewURLParser: true})
    .then(() => {
        console.log('MongoDB Connected...');
        return server.listen({port: 8000})
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    });

