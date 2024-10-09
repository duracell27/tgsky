import FloorModel, { Floor } from "@/app/models/floor.model";
import connectDB from "@/app/utils/DB";
import { Floors } from "@/app/utils/Floors";
import { NextRequest, NextResponse } from "next/server";

interface FloorProps {
  tgId: number;
  floorType: 'products' | 'services' | 'recreation' | 'fashion' | 'electronics';
  floorNumber: number;

}



export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = (await req.json()) as FloorProps;

    
    const tgId = body.tgId;
    const floorType = body.floorType;
    // const floorNumber = body.floorNumber;

    const userFloors = await FloorModel.find({tgId})
    const categoryFloors = userFloors.filter((floor)=>floor.floorType === floorType)


    // TODO create floor generator

    const newFloor: Floor = {...Floors[floorType][categoryFloors.length + 1]}
    newFloor.tgId = tgId;
    newFloor.floorNumber = userFloors.length+1


    console.log("new floor",newFloor)


    // const newFloor:Floor = {
    //     tgId,
    //     floorType,
    //     floorNumber,
    //     floorName: 'Пекарня',
    //     floorLvl: 0,
    //     floorReduceBuy: 0,
    //     floorIncreaseSell: 0,
    //     departments: [{
    //         ordinal: 1,
    //         name: 'Крусани',
    //         baseBuy: 1,
    //         baseSell: 1,
    //         deliveryTime: 12,
    //         sellTime: 15,
    //         status: 'waitForWorker' ,
    //         timeToDelivery: null,
    //         timeToSell: null
    //     },{
    //         ordinal: 2,
    //         name: 'Булочки',
    //         baseBuy: 1,
    //         baseSell: 1,
    //         deliveryTime: 12,
    //         sellTime: 15,
    //         status: 'waitForWorker' ,
    //         timeToDelivery: null,
    //         timeToSell: null
    //     }, {
    //         ordinal: 3,
    //         name: 'Хліб',
    //         baseBuy: 1,
    //         baseSell: 1,
    //         deliveryTime: 12,
    //         sellTime: 15,
    //         status: 'waitForWorker' ,
    //         timeToDelivery: null,
    //         timeToSell: null
    //     }],
    //     workers: [],
    //   };
    await FloorModel.create(newFloor)
    return NextResponse.json({ success: true, message: 'Floor created successfully' });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
};


export const GET = async (req: NextRequest) => {
    try {
      await connectDB();
      const { searchParams } = new URL(req.url);
      const tgId = searchParams.get("tgId");
      if (!tgId) {
              return NextResponse.json({ success: false, message: "Please relogin to game" }, { status: 400 });
            }

      const floors = await FloorModel.find({ tgId }).select(' -workers').sort({floorNumber: -1});
      
      return NextResponse.json({ success: true, floors });
    } catch (error) {
      return NextResponse.json(
        { success: false, message: error },
        { status: 500 }
      );
    }
  };
  