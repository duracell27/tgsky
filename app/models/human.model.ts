// import mongoose, { Document, Model, Schema, Types } from "mongoose";

// interface Human extends Document {
//   tgId: number;
//   name: string;
//   skill: "products" | "services" | "recreation" | "fashion" | "electronics";
//   lvl: number;
//   dreamWork: Types.ObjectId;
//   work?: Types.ObjectId | null;
//   // live: Types.ObjectId;
// }

// const userSchema = new Schema<Human>(
//   {
//     tgId: { type: Number, required: true, unique: true },
//     name: {
//       type: String,
//       required: true,
//     },
//     skill: {
//       type: String,
//       enum: ["products", "services", "recreation", "fashion", "electronics"],
//       required: true,
//     },
//     lvl: {
//       type: Number,
//       required: true,
//       min: 1,
//       max: 9,
//     },
//     dreamWork: { type: Schema.Types.ObjectId, ref: "Floor" },
//     work: { type: Schema.Types.ObjectId, ref: "Floor", default: null },
//     // live: { type: Types.ObjectId, ref: 'Work' },
//   },
//   { timestamps: true }
// );

// const UserModel: Model<Human> =
//   mongoose.models.Human || mongoose.model<Human>("Human", userSchema);

// export default UserModel;
