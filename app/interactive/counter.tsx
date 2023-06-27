"use client";

import { PropsWithChildren, useState } from "react";

export default function Counter({ children }: PropsWithChildren<{}>) {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8">
      <p className="text-2xl">{count}</p>
      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded-md focus:ring focus:ring-gray-400"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      {children}
    </div>
  );
}
