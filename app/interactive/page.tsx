import Counter from "./counter";
import ServerText from "./server-text";

export const metadata = {
  title: "My Interactive Page (App)",
};

export default function Interactive() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold">My Interactive Page (App)</h1>
      <Counter>
        <ServerText />
      </Counter>
    </section>
  );
}
