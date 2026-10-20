import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { email: true, role: true },
  });
  if (!user) redirect("/login");

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-2xl font-semibold">Dashboard</h1>
      <p className="text-[#472c1c]">
        Signed in as <strong>{user.email}</strong> ({user.role})
      </p>
    </main>
  );
}
