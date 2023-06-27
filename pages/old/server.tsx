import Head from "next/head";

import { timeApiEndpoint, type DateTimeResponse } from "@/utils/api";

export default function StaticGenerated({ res }: { res: DateTimeResponse }) {
  return (
    <>
      <Head>
        <title>My SSG / SSR Page (Pages)</title>
      </Head>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">My SSG / SSR Page (Pages)</h1>
        <div className="mt-6">
          <p>
            Date: <b>{res.date}</b>
          </p>
          <p className="mt-2">
            Date Time: <b>{res.dateTime}</b>
          </p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(timeApiEndpoint).then((res) => res.json());

  return {
    props: {
      res,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch(timeApiEndpoint).then((res) => res.json());

//   return {
//     props: {
//       res,
//     },
//   };
// }
