import NextAuth, { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "cjoseph" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "12341234",
        },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "1",
            userName: "u1",
            name: "u 1",
            password: "pass1",
            email: "u1@a.com",
          },
          {
            id: "2",
            userName: "u2",
            name: "u 2",
            password: "pass2",
            email: "u2@a.com",
          },
          {
            id: "3",
            userName: "u3",
            name: "u 3",
            password: "pass3",
            email: "u3@a.com",
          },
        ];

        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        );
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
