import mongoose, { Document, Model, Schema } from "mongoose";

interface Department extends Document {
  tgId: number;
  ordinal: number;
  name: string;
  baseBuy: number;
  baseSell: number;
  deliveryTime: number
  sellTime: number
}

const departmentSchema = new Schema<Department>(
  {
    tgId: { type: Number, required: true, unique: true },
    
  },
  { timestamps: true }
);

const FloorModel: Model<Department> =
  mongoose.models.Department || mongoose.model<Department>("Department", departmentSchema);

export default FloorModel;
