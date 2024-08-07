const { Schema, models, model } = require("mongoose");

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { type } from "os";
const saltRounds = 10;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    countryCode: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (pass) {
          if (!pass || pass.length < 8) {
            throw new Error("Password must be at least 8 characters long!");
          }
          return true;
        },
        message: "Password must be at least 8 characters long!",
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(user?.password, salt);
  user.password = hashedPassword;

});

export const User = models?.User || model("User", UserSchema);

