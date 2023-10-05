import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
// import { sendEmail } from "@/helpers/mailer";
import { connect } from "@/dbConfig/dbConfig";
import { cookies } from 'next/headers'
// import { generateHash } from "@/helpers/password";
connect();
console.log("register is running")
export async function POST(request: NextRequest,response: NextResponse){
    try{
        const reqBody = await request.json();
        const { name, email, password } = reqBody;
        // console.log(userName,password)
        const user = await User.findOne({ email: email });
        console.log(user);
        if(user){
            return NextResponse.json({success: false,message:"USERNAME Already Exist , Try With New Credentials."},{status:400})

        }
        console.log("running")
        const Userr:any = new User({
          email,
          password,
          name,
        });
        console.log(Userr)
        await Userr.save();
        return NextResponse.json({ message: "saved successfully" }, { status: 200 });

    
    } catch (error: any) {
      console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}