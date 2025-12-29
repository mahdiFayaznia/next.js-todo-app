import { prisma } from "@/_lib";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * GET /api/todos/:id
 */
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

/**
 * PUT /api/todos/:id
 */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();

  const todo = await prisma.todo.update({
    where: { id },
    data: {
      title: body.title,
      completed: body.completed,
    },
  });

  return NextResponse.json(todo);
}

/**
 * DELETE /api/todos/:id
 */
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  await prisma.todo.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
