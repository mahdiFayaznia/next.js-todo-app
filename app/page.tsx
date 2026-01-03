import Link from "next/link";

const Home = () => {
  return (
    <section className="FLEX-CENTER-COL h-full gap-5 select-none">
      <h1 className="font-aleo text-4xl font-black">Welcome</h1>
      <p className="text-default-700">Manage your tasks efficiently</p>
      <Link
        href="/todos"
        className="bg-primary text-primary-foreground rounded-xl px-6 py-3 hover:brightness-95"
      >
        Go to Todos
      </Link>
    </section>
  );
};

export default Home;
