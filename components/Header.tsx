import Link from "next/link";

export default function Header({ isNew }: { isNew?: boolean }) {
  return (
    <ul className="flex gap-4 max-w-3xl mx-auto mt-8 mb-4">
      {["static", "interactive", "server"].map((item) => (
        <li key={item} className="capitalize underline">
          <Link href={isNew ? `/${item}` : `/old/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
