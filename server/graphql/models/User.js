class User {
  constructor(model) {
    this.Model = model;
  }

  getAuthUser(ctx) {
    if (ctx.isAuthenticated) {
      return ctx.getUser();
    }

    return null;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('Password must be the same as confirmation password!');
    }

    try {
      return await this.Model.create(signUpData);
    } catch (err) {
      if (err?.code === 11000) {
        throw new Error('User with provided email already exists!');
      }
      throw e;
    }
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      return user;
    } catch (err) {
      return err;
    }
  }

  signOut(ctx) {
    try {
      ctx.logout();
      return true;
    } catch (err) {
      return err;
    }
  }
}

module.exports = User;
