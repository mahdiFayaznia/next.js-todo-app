import { prisma } from "@/_lib";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * GET /api/todos
 */
export async function GET() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(todos);
}

/**
 * POST /api/todos
 */
export async function POST(req: Request) {
  const body = await req.json();

  if (!body.title || typeof body.title !== "string") {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const todo = await prisma.todo.create({
    data: {
      title: body.title,
    },
  });

  return NextResponse.json(todo, { status: 201 });
}
