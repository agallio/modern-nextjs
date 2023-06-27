import Head from "next/head";

export default function Static() {
  return (
    <>
      <Head>
        <title>My Static Page (Pages)</title>
      </Head>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">My Static Page (Pages)</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis, obcaecati doloribus. Culpa perferendis aliquam dolor
          ipsum. Nisi dignissimos reprehenderit minus ex impedit. Dignissimos ex
          obcaecati quaerat esse corporis error ad. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Recusandae quibusdam cupiditate esse
          error totam non numquam. Minus inventore sunt magnam asperiores ea,
          neque corrupti voluptate, quas nemo sint aut mollitia!
        </p>
      </section>
    </>
  );
}
