import Image from "next/image";
import Head from "next/head";

import NextImage from "../public/next.svg";
import Image1 from "../public/1.png";
import Image2 from "../public/2.png";
import Image3 from "../public/3.png";
import Image4 from "../public/4.png";

export default function Index() {
  return (
    <>
      <Head>
        <title>Modern Next.js</title>
      </Head>

      <div className="bg-black w-full text-white">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-center text-5xl font-bold mr-12">Modern</h1>
          <Image src={NextImage} alt="Next.js" className="invert" />
        </div>

        <div className="h-screen flex px-24 items-center">
          <ul>
            <li className="text-4xl">
              <span className="mr-2">🕸️</span> Routes — Directory
            </li>
            <li className="text-4xl mt-8">
              <span className="mr-2">💻</span> Server Components
            </li>
            <li className="text-4xl mt-8">
              <span className="mr-2">📱</span> Client Components
            </li>
            <li className="text-4xl mt-8">
              <span className="mr-2">☯️</span> Mix!
            </li>
            <li className="text-4xl mt-8">
              <span className="mr-2">🌐</span> SEO — Head
            </li>
            <li className="text-4xl mt-8">
              <span className="mr-2">💿</span> Data Fetching
            </li>
          </ul>
        </div>

        <div className="h-screen flex flex-col px-24 justify-center">
          <Image src={Image1} alt="php" />

          <a
            href="https://github.com/reactwg/server-components/discussions/5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-4"
          >
            Dan Abramov: RSC From Scratch Part 1
          </a>
        </div>

        <div className="h-screen flex flex-col px-24 justify-center">
          <Image src={Image2} alt="react-before" />
        </div>

        <div className="h-screen flex flex-col px-24 justify-center">
          <Image src={Image3} alt="react-now" />
        </div>

        <div className="h-screen flex flex-col px-24 justify-center">
          <Image src={Image4} alt="all-react" />

          <a
            href="https://github.com/reactwg/server-components/discussions/4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-4"
          >
            {`Dan Abramov: Why do Client Components get SSR'd to HTML?`}
          </a>
        </div>

        <div className="h-screen flex flex-col px-24 justify-center">
          <h2 className="text-center text-8xl font-bold mr-12">Q&A</h2>
        </div>

        <div className="h-screen flex flex-col px-24 justify-center">
          <h2 className="text-center text-8xl font-bold mr-12">
            One More Thing...
          </h2>
        </div>
      </div>
    </>
  );
}
