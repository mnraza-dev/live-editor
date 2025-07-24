import NextAuth from "next-auth";

import {PrismaAdapter} from "@auth/prisma-adapter";


export const {auth, handlers, signin, signout} = NextAuth({})