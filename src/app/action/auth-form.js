'use server'

import { User } from '../api/models/user';
import axios from 'axios';
import mongoose from 'mongoose';
import React from 'react'

export default async function signup(prevState, formData) {
    let error = {};
    const email = formData.get('email');
    const password = formData.get('password');
    const fullName = formData.get('fullName');

    if (fullName.trim() === "" || !fullName.trim()) {
        error.fullName = "Please enter your full name";
    }
    if (!validateEmail(email)) {
        error.email = "Please enter valied email";
    }

    if (!validatePassword(password)) {
        error.password = `Password must be at least 8 characters long`;
    }

    if (Object.keys(error).length > 0) {
        return { error: error };
    }
    let payload = {
        fullName,
        email,
        password

    }

    console.log("payload ====>", formData);
    mongoose.connect(process.env.MONGO_URL);
    const createUser = await User.create(payload);
    return Response.json(createUser);

    // axios.post("http://localhost:3000/api/register", payload).then((res) => {
    //     console.log("register Form ====>" ,res);
    //   }).catch((err) => console.log("Error ===> 3", err))
}


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? true : false;
};

const validatePassword = (password) => {
    return password.length >= 8
        ? true
        : false;
};