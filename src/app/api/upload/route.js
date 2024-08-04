import { NextResponse } from "next/server";
import dbConnect from "../../../db/config/dbConnect"
import {writeFile} from "fs/promises"
import File from "../models/FileUpload";
dbConnect();
export async function POST(req, res) {
    // if (req.method === 'POST') {
    const data = await req.formData();
    const file = data.get('file');


    if (!file) {
        return NextResponse.json({ 'message': "No image selected ", success: false })

    }
    const byteData = await file.arrayBuffer();
    const fileBuffer = Buffer.from(byteData);
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
    const uniqueFileName = `${timestamp}_${randomNum}_${file?.name}`;
    const path = `./public/uploads/${uniqueFileName}`;
    await writeFile(path , fileBuffer);

    const newFile = new File({
        originalName: file?.name,
        filename: uniqueFileName,
        path: path,
        size: file?.size
    });
    await newFile.save();
    // }
    return NextResponse.json({ 'message': "file uploaded " , success: true, path})


}


