const passport = require('passport');

const authenticateUser = (req, options) => {
  return new Promise((res, rej) => {
    const done = (err, user) => {
      if (err) {
        return rej(new Error(err));
      }

      if (user) {
        req.login(user, (error) => {
          if (error) {
            return rej(new Error(error));
          }

          return res(user);
        });
      } else {
        return rej(new Error('Invalid password or email!'));
      }
    };

    const authFn = passport.authenticate('graphql', options, done);
    authFn(req);
  });
};

const buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => {
      return authenticateUser(req, options);
    },
    logout: () =>
      req.logout((err) => {
        if (err) {
          return err;
        }

        return true;
      }),
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user,
  };

  return auth;
};

module.exports = {
  buildAuthContext,
};
