const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const createApolloServer = () => {
    return new ApolloServer({
        typeDefs,
        resolvers,
        formatError: (error) => {
            console.log('GraphQL Error:', error);
            return {
                message: error.message,
                code: error.extensions?.code || 'INTERNAL_SERVER_ERROR'
            };
        }
    });
};

module.exports = { createApolloServer }; 