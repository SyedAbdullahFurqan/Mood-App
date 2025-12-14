import { connectDB } from "@/lib/mongodb";
import Mood from "@/model/Mood";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import GoogleProvider from "next-auth/providers/google"


export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const existingUser = await Mood.findOne({ email: user.email });

      if (!existingUser) {
        await Mood.create({
          name: user.name,
          email: user.email,
          img: user.image,
        });
      }

      return true;
    },

    
    async jwt({ token, user }) {
      if (user) token.email = user.email; // 🔥 store email in JWT
      return token;
    },

    async session({ session, token }) {
      session.user.email = token.email; // 🔥 return email in session
      return session;
    }
  },
};