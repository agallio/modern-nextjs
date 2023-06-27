import { timeApiEndpoint, type DateTimeResponse } from "@/utils/api";

export const metadata = {
  title: "My SSG / SSR Page (App)",
};

async function getStaticProps(): Promise<DateTimeResponse> {
  const res = await fetch(timeApiEndpoint).then((res) => res.json());
  return res;
}

export default async function StaticGenerated() {
  const res = await getStaticProps();

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold">My SSG / SSR Page (App)</h1>
      <div className="mt-6">
        <p>
          Date: <b>{res.date}</b>
        </p>
        <p className="mt-2">
          Date Time: <b>{res.dateTime}</b>
        </p>
      </div>
    </section>
  );
}
