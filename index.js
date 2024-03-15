const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs =require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config');




// const  checkAuth  = require('./util/check-auth');






const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {  (req)
    // const authHeader = req.headers.authorization || '';
    // return { ...checkAuth(authHeader) };
}
});

mongoose.connect(MONGODB, { useNewURLParser: true})
    .then(() => {
        console.log('MongoDB Connected...');
        return server.listen({port: 8000})
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    });

