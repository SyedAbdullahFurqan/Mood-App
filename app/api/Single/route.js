import { connectDB } from "@/lib/mongodb";
import User from "@/model/User";
import { NextResponse } from "next/server";


export async function POST( request) {

  const body = await request.json();

  try {
       await connectDB();
const bodt= await User.find(body)
return NextResponse.json({Moods:bodt})
  } catch (error) {
    NextResponse.json({ success: false, message: error.message });
  }


  // return NextResponse.json({ message: "POST request working ✅", data: body });
}
  
