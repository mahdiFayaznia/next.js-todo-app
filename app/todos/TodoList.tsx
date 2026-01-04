import { prisma } from "@/_lib";
import TodoItem from "./TodoItem";

interface Props {
  query?: string;
}

const TodoList = async ({ query = "" }: Props) => {
  const todos = await prisma.todo.findMany({
    where: query.trim().length > 0 ? { title: { contains: query } } : undefined,
    orderBy: { createdAt: "desc" },
  });

  if (todos?.length === 0) {
    return (
      <p className="text-default-800 text-center text-2xl">No todos yet.</p>
    );
  }

  return (
    <ul className="space-y-2">
      {todos?.map((todo) => (
        <TodoItem key={todo?.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
