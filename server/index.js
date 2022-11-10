const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const http = require('http');
const { typeDefs } = require('./graphql/types');
const { resolvers } = require('./graphql/resolvers');
const User = require('./graphql/models/User');
const { buildAuthContext } = require('./graphql/context');

const db = require('../server/database');
db.connect();

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  require('./middlewares').init(app, db);

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        User: new User(mongoose.model('User')),
      },
    }),
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: false,
  });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
