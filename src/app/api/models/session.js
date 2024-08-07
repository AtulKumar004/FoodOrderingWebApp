
// const { Schema, models, model } = require("mongoose");


import {Schema, models, model} from 'mongoose';
import mongoose from 'mongoose';
// import  MongodbAdapter  from '@lucia-auth/adapter-mongodb';
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import dbConnect from '../../../db/config/dbConnect';
// const { MongodbAdapter } = require('@lucia-auth/adapter-mongodb');
const SessionSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    expires_at: {
        type: Date,
        required: true,
    },
});

export const Session = models?.Session || model('Session', SessionSchema);
// adapter for lucia 

// export  const adapter = new MongodbAdapter(
//     mongoose.connection.collection('sessions'),
//     mongoose.connection.collection('users')
// );
let adapter;

const initializeAdapter = async () => {
  await dbConnect();

  adapter = new MongodbAdapter(
    mongoose.connection.collection('sessions'),
    mongoose.connection.collection('users')
  );
};

initializeAdapter();

module.exports = { adapter };

