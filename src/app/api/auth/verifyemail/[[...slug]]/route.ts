// pages/api/verifyemail/[...slug].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import  User  from '@/models/userModel';


console.log("verify mail is running")
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  console.log(slug)
  console.log(slug[0],slug[1])
  console.log(typeof(slug[0]),typeof(slug[1]))
  try {
    const user = await User.updateOne(
      {
        _id: slug[0],
        "tokens.token": slug[1],
        "tokens.expiration": { $gt: Date.now() }, 
      },
      { $pull: { tokens: { token: slug[1] } }, verified: true }
    );
    console.log(user)

    if (!user.modifiedCount) {
      return NextResponse.json({message:"Invalid link or expired token"},{status:200});
    }

    return NextResponse.json({message:"Email verified successfully"},{status:200});
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
  
}