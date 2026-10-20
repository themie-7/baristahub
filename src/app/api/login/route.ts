import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const email = parsed.data.email.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });

  // Same error for "no such user" and "wrong password" so attackers can't probe for emails
  const valid = user
    ? await bcrypt.compare(parsed.data.password, user.passwordHash)
    : false;
  if (!user || !valid) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  await createSession({ userId: user.id, role: user.role as "BARISTA" | "CAFE_OWNER" | "SUPPLIER" | "ADMIN" });

  return NextResponse.json({ id: user.id, email: user.email, role: user.role });
}
