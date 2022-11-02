class User {
  constructor(model) {
    this.Model = model;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('Password must be the same as confirmation password!');
    }
    return await this.Model.create(signUpData);
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
