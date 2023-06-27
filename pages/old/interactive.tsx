import { useState } from "react";
import Head from "next/head";

export default function Interactive() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>My Interactive Page (Pages)</title>
      </Head>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">My Interactive Page (Pages)</h1>
        <div className="mt-8">
          <p className="text-2xl">{count}</p>
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded-md focus:ring focus:ring-gray-400"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </section>
    </>
  );
}
