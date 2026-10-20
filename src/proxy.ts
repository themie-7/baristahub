import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("session")?.value;

  let valid = false;
  if (token) {
    try {
      await jwtVerify(token, secret);
      valid = true;
    } catch {
      valid = false;
    }
  }

  if (!valid) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
