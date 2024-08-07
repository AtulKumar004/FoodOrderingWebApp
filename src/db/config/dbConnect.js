import mongoose from "mongoose";

const MONGODB_URI =  "mongodb+srv://foodOderingPlatform:AX6neVNceimY10Gu@cluster0.tuiwy8q.mongodb.net/food-odering-app";
console.log("MONGODB_URI ===>" , MONGODB_URI)

if (!MONGODB_URI) {
    throw new Error(
        'Please define Mongo DB URI'
    )
}

let cached = globalThis.mongoose

if (!cached) {
    cached = globalThis.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
         
        }

        cached.promise = await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log("Database is connect succefully ");
            return mongoose
        }).catch((err) => console.log("Database is not connected!"))
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default dbConnect