const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <main className="flex-1 container mx-auto p-4">{children}</main>
    </div>
  );
};

export default AppLayout;
