import mongoose from "mongoose";
import { User } from "../models/user";

export async function POST(req) {
  const body = await req.json();
  console.log('body ====>' , body , process.env.MONGO_URL)
  mongoose.connect(process.env.MONGO_URL);
  const createUser = await User.create(body);
  return Response.json(createUser);
}
