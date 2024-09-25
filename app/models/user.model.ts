import mongoose, { Document, Model, Schema } from "mongoose";

interface User extends Document {
  tgId: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  languageCode?: string;

  lvl: number;
  exp: number;
  coins: number;
  usd: number;
}

const userSchema = new Schema<User>(
  {
    tgId: { type: Number, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String },
    languageCode: { type: String },
    lvl: { type: Number, default: 1 },
    exp: { type: Number, default: 0 },
    coins: { type: Number, default: 500 },
    usd: { type: Number, default: 15 },
  },
  { timestamps: true }
);

const UserModel: Model<User> =
  mongoose.models.User || mongoose.model<User>("User", userSchema);

export default UserModel;
