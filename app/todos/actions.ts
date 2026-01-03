"use server";

import { prisma } from "@/_lib";
import { revalidatePath } from "next/cache";

export const addTodo = async (title: string) => {
  if (!title?.trim()) {
    throw new Error("Todo title cannot be empty");
  }

  await prisma.todo.create({
    data: { title },
  });

  revalidatePath("/todos");
};

export const updateTodo = async (id: string, title: string) => {
  if (!title?.trim()) {
    throw new Error("Todo title cannot be empty");
  }

  await prisma.todo.update({
    where: { id },
    data: { title },
  });

  revalidatePath("/todos");
};

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: { id },
  });

  revalidatePath("/todos");
};
