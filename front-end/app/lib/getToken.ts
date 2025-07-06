import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getAuthToken() {
  const token = await getToken({
    req: {
      headers: {
        cookie: cookies().toString(),
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  });

  return token;
}
