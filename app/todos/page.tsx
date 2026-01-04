import AddTodo from "./AddTodo";
import TodoContainer from "./TodoContainer";
import TodoList from "./TodoList";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

const TodosPage = async ({ searchParams }: Props) => {
  const { q = "" } = await searchParams;

  return (
    <TodoContainer>
      <AddTodo />
      <TodoList query={q} />
    </TodoContainer>
  );
};

export default TodosPage;
