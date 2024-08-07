

import dbConnect from '../../../db/config/dbConnect';

import bcrypt from 'bcrypt';
import { User } from "../models/user";
import { lucia  ,validateRequest } from "../auth/[...nextauth]/route"
import { cookies } from 'next/headers';



export async function GET(request) {
    
    console.log("Login API ")
    const users = await User.find({}).sort({ _id: -1 });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });

}

export async function POST(request) {

    await dbConnect();
    const { email, password } = await request.json();
    console.log("Login Post API ===>", email, "password: ", password)
    // Check if email and password are provided
    if (!email || !password) {
        return new Response(JSON.stringify({
            success: false,
            status: 400,
            message: 'email and password are required',
            data: email,
        }));
    }

    // Find the user in the database
    const user = await User.findOne({ email });

    // If user is not found, return an error
    if (!user) {
        return new Response(JSON.stringify({
            success: false,
            status: 400,
            message: 'Invalid credentials '
        }));
    }



    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
        const session = await lucia.createSession(user._id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        );
        return new Response(JSON.stringify({
            success: true,
            status: 200,
            data: user
        }));
    } else {
        return new Response(JSON.stringify({
            success: false,
            status: 400,
            message: 'Wrong Password'
        }));
    }
   

}