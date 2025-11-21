"use client";

import AddTodo from "./AddTodo";

const TodoContainer = () => {
  return (
    <div className="FLEX-H-CENTER border-default-200 h-full w-full rounded-2xl border-2 border-solid p-3 md:p-10">
      <div className="w-full md:max-w-xl">
        <AddTodo />
      </div>
    </div>
  );
};

export default TodoContainer;
