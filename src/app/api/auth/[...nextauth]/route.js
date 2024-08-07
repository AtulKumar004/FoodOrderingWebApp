// import NextAuth from "next-auth";

const { cookies } = require('next/headers');
// import { cookies } from 'next/headers';

// const { cache } = require('react');
import  { cache } from 'react';
import dbConnect from '../../../../db/config/dbConnect';

// import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { Lucia } from "lucia";
import { adapter } from "../../models/session";

dbConnect();

export  const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production'
    },

  },
  getUserAttributes: (attribute) => {
    return {
      username: attribute?.fullName ?? "Not valied"
    }

  }
});

export  const validateRequest = cache(
  async () => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }
    const result = await lucia.validateSession(sessionId);
    try {

      if (result?.session && result?.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result?.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes

        );
      }

    } catch (error) {
      console.error("auth error => ", error);
    }

    return result;
  }
);
// model.exports = {
//   lucia,
//   validateRequest,
// }

