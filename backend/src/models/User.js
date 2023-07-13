import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  cpf: {
    type: String,
    required: function () {
      return this.typePerson === "pessoa_fisica";
    },
    trim: true,
    unique: true,
  },
  cnpj: {
    type: String,
    required: function () {
      return this.typePerson === "pessoa_juridica";
    },
    trim: true,
    unique: true,
  },
  typePerson: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const user = model("User", userSchema);

export default user;
