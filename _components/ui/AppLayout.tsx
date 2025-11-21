import AppNavbar from "./AppNavbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <AppNavbar />
      <main className="container mx-auto flex-1 p-4">{children}</main>
    </div>
  );
};

export default AppLayout;
