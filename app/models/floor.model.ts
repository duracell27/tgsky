import mongoose, { Model, Schema, Types } from "mongoose";

export interface Department {
  ordinal: number;
  baseBuy: number;
  baseSell: number;
  deliveryTime: number;
  sellTime: number;
  revenuePerMin: number;
  status: "waitForWorker" | "idle" | "delivery" | "selling";
  timeToDelivery: Date | null;
  timeToSell: Date | null;
}

export interface Floor {
  tgId: number;
  floorNumber: number;
  floorType: "products" | "services" | "recreation" | "fashion" | "electronics";
  floorTypeOrdinal: number;
  floorLvl: number;
  floorReduceBuy: number;
  floorIncreaseSell: number;

  departments: Department[];
  workers: Types.ObjectId[];
}

const floorSchema = new Schema<Floor>(
  {
    tgId: { type: Number, required: true },
    floorNumber: { type: Number, required: true },
    floorType: { type: String, required: true },
    floorTypeOrdinal: { type: Number, required: true },
    floorLvl: { type: Number, required: true, default: 0 },
    floorReduceBuy: { type: Number, required: true, default: 0 },
    floorIncreaseSell: { type: Number, required: true, default: 0 },
    departments: [
      {
        ordinal: { type: Number, required: true },
        baseBuy: { type: Number, required: true },
        baseSell: { type: Number, required: true },
        deliveryTime: { type: Number, required: true },
        sellTime: { type: Number, required: true },
        revenuePerMin: { type: Number, required: true },   
        status: {
          type: String,
          required: true,
          enum: ["waitForWorker", "idle", "delivery", "selling"],
          default: "waitForWorker",
        },
        timeToDelivery: { type: Date, default: null },
        timeToSell: { type: Date, default: null },
      },
    ],
    workers: [{ type: Schema.Types.ObjectId, ref: "Human" }],
  },
  { timestamps: true }
);

const FloorModel: Model<Floor> =
  mongoose.models.Floor || mongoose.model<Floor>("Floor", floorSchema);

export default FloorModel;
