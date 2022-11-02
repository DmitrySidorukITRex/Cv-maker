const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../config/dev');

require('./models/user');

exports.connect = () => {
  mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
    },
    () => {
      console.log('Connected to DB');
    }
  );
};

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: config.DB_URI,
    collection: 'projectSessions',
  });

  return store;
};
