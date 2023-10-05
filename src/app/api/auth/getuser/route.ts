import { NextResponse,NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { cookies } from 'next/headers'

console.log("logout running")

export async function POST(request: NextRequest,response: NextResponse) {
    try {
        const reqBody = await request.json();
        const { cookieItem } = reqBody;
        console.log(cookieItem)

        const rootuser = await User.findOne({ "tokens.token":cookieItem });
        console.log(rootuser);
  return NextResponse.json(rootuser,{status:200});
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
