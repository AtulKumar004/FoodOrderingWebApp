"use client"; // This is for client-side rendering in Next.js; keep it if needed

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
