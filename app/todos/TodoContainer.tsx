const TodoContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="FLEX-H-CENTER border-default-200 h-full w-full rounded-2xl border-2 border-solid p-3 md:p-10">
      <div className="w-full space-y-10 md:max-w-xl">{children}</div>
    </div>
  );
};

export default TodoContainer;
