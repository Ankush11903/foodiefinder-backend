import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, JWTVerifyResult } from "jose";


export const corsHeaders = {
  "Access-Control-Allow-Origin": "https://idiet.vercel.app",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export async function middleware(request: NextRequest, response: NextResponse) {
  // Initialize the request.context object

  if (request.method === "OPTIONS") {
    return NextResponse.json({}, { headers: corsHeaders });
  }

  

    
   // If the path is not the profile path, allow the request to proceed
}
export const config = {
  matcher: "/api/:path*",
};
