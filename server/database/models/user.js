const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: {
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
  },
  email: {
    type: String,
    required: 'Email is required!',
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  name: {
    type: String,
    minlength: [6, 'Minimum length is 6 characters!'],
  },
  username: {
    type: String,
    required: true,
    minlength: [3, 'Minimum length is 3 characters!'],
  },
  password: {
    type: String,
    minlength: [6, 'Minimum password length is 6 characters!'],
    maxlength: [32, 'Maximum length is 32 characters!'],
    required: true,
  },
  role: {
    enum: ['guest', 'admin'],
    type: String,
    required: true,
    default: 'guest',
  },
  info: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.validatePassword = function (candidatePassword, done) {
  const user = this;
  bcrypt.compare(candidatePassword, user.password, function (err, isSuccess) {
    if (err) {
      return done(err);
    }

    done(null, isSuccess);
  });
};

module.exports = mongoose.model('User', userSchema);
