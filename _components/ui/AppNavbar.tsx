import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

const AppNavbar = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between gap-2 p-4 md:flex-row">
      <AppNavbarHeading />
      <div className="flex gap-4">
        <Search />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

const AppNavbarHeading = () => {
  return (
    <h1 className="FLEX-CENTER font-aleo text-default-700 text-3xl font-black uppercase">
      Todo App
    </h1>
  );
};

export default AppNavbar;
