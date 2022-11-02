const mongoose = require('mongoose');
const { typeDefs } = require('./types');
const { resolvers } = require('./resolvers');
const User = require('./models/User');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  context: () => ({
    models: {
      User: new User(),
    },
  }),
});

module.exports = apolloServer;
