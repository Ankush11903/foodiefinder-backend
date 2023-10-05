// 'use server'
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
console.log("running")

// import Cors from "cors";
import { connect } from "@/dbConfig/dbConfig";

connect();

// Use the middleware for all routes
// const cors = Cors({

console.log("running");

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    if (!email || !password) {
      return NextResponse.json(
        { error: "please add all the fields" },
        { status: 422 }
      );
    }
    const user = await User.findOne({ email: email });
    console.log(user);

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Exist",
        unAuthorized: "User does not exist! Please register first.",
      });
    }
    // const isMatch = await bcryptjs.compare(password, user.password);
    // const isMatch=password===user.password; 
    // console.log(isMatch)

    // if (!isMatch) {
    //   return NextResponse.json({
    //     success: false,
    //     message: "",
    //     errorPass:
    //       "You have entered a wrong Password! Please enter a correct one.",
    //   });
    // }

    // Create token
    const token=jwt.sign({_id:user._id},"Mynameiskhan");
    user.tokens=user.tokens.concat({token:token});
    // user.name=name;
    await user.save();
    console.log(token);
    const { _id, name }: any = user;
    return NextResponse.json(
      { token, user: { _id, name, email } },
      { status: 200 }
    );

    // cookies().set("GSIPOU8529", token, {
    //   path: "/",
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    //   httpOnly: true,
    //   sameSite: "none",
    // });

    // response.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");

    // return NextResponse.json({
    //   message: "Login successful",
    //   success: true,
    // });;
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
