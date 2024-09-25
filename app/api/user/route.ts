import UserModel from "@/app/models/user.model";
import connectDB from "@/app/utils/DB";
import { NextRequest, NextResponse } from "next/server";

interface UserPost {
  tgId: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  languageCode?: string;
}

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = (await req.json()) as UserPost;
    const tgId = body.tgId;

    const isUserExist = await UserModel.findOne({ tgId });

    if (isUserExist) {
      return NextResponse.json({ success: true, message: "User exists", user: isUserExist }, { status: 200 });
    } else {
      const newUser = new UserModel({ ...body });
      await newUser.save();
      return NextResponse.json(
        { success: true, message: "User created", user: newUser},
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
};
