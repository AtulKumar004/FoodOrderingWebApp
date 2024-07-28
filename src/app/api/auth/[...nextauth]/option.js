import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
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
  
        // const res = await fetch("/api/login", {
        //   method: "POST",
        //   body: JSON.stringify(requestBody),
        //   headers: { "Content-Type": "application/json" },
        // });

        axios
          .post("http://localhost:3000/api/login", requestBody)
          .then((res) => {
            console.log("Login Res ====>", res);
          
          })
          .catch((err) => console.log("Error ===>", err));
        // return null;

        // Return null if user data could not be retrieved
      },
    }),
  ],
};

module.exports = options;
