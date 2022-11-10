const session = require('express-session');
const cors = require('cors');
const config = require('../config/dev');
const passport = require('passport');

exports.init = (server, db) => {
  require('./passport').init(passport);

  const sess = {
    name: 'project-session',
    secret: config.SESSION_SECRET,
    cookie: {
      maxAge: 2 * 3600 * 1000,
    },
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore(),
  };

  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

  server.use(cors(corsOptions));
  server.use(session(sess));
  server.use(passport.initialize());
  server.use(passport.session());
};
