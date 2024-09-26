import mongoose, { Document, Model, Schema } from "mongoose";

interface Floor extends Document {
  tgId: number;
  floorNumber: number;
  floorType: 'products' | 'services' | 'recreation' | 'fashion' | 'electronics',
  floorName: string;
  floorLvl: number;
  floorReduceBuy: number
  floorIncreaseSell: number
  
  departments: 
  workers: 
}

const floorSchema = new Schema<Floor>(
  {
    tgId: { type: Number, required: true, unique: true },
    
  },
  { timestamps: true }
);

const FloorModel: Model<Floor> =
  mongoose.models.Floor || mongoose.model<Floor>("Floor", floorSchema);

export default FloorModel;
