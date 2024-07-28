import NextAuth from "next-auth";
import options from "./option";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "nsjskjjkas" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials

        const requestBody = {
          email: credentials.email,
          password: credentials.password,
        };
        // return null;

       

        // const res = await fetch("/api/login", {
        //   method: "POST",
        //   body: JSON.stringify(requestBody),
        //   headers: { "Content-Type": "application/json" },
        // });

        axios
          .post("/api/login", requestBody)
          .then((res) => {
            // return Response.json(res);
            console.log("Login Res ====>", res);
            return true ;
          })
          .catch((err) => console.log("Error ===>", err));
        return true;

        // Return null if user data could not be retrieved
      },
    }),
  ],
});

export { handler as GET, handler as POST };