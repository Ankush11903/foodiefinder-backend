import { NextResponse ,NextRequest} from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { cookies } from 'next/headers'

console.log("logout running")

export async function POST(request: NextRequest,response: NextResponse) {
    try {
      const reqBody = await request.json();
        const { cookie,id } = reqBody;
        const result = await User.updateOne(
          { _id: id },
          { $pull: { tokens: { token: cookie } } }
        );
        console.log(result);
        if(result.nModified===0){
          return NextResponse.json({ message: "Already Logged Out" });
        }
        console.log("result");
        console.log(result);
       return NextResponse.json({ message: "Successfully Logged Out" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
