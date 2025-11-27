import { Search, ThemeSwitcher } from "@/_components/ui";

const AppNavbar = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between gap-2 p-4 md:flex-row">
      <Heading />
      <div className="flex flex-1 justify-end gap-4">
        <Search />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <h1 className="FLEX-CENTER font-aleo text-default-700 text-3xl font-black uppercase select-none">
      Todo App
    </h1>
  );
};

export default AppNavbar;
