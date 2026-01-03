import AddTodo from "./AddTodo";
import TodoContainer from "./TodoContainer";
import TodoList from "./TodoList";

const TodosPage = () => {
  return (
    <TodoContainer>
      <AddTodo />
      <TodoList />
    </TodoContainer>
  );
};

export default TodosPage;
