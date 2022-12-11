const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      default: 2
    }
  },
  {
    timestamps: true
  }
);

UserSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    name: login
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }
  return user;
};

//in case a user is deleted, we should delete all messages related to that deleted user.
UserSchema.pre("remove", function (next) {
  this.model("Message").deleteMany({ user: this._id }, next);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
