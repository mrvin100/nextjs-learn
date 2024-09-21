import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn/routing",
};

export default function Home() {
  return (
    <div className="h-[80vh] grid gap-4 place-items-center place-content-center border rounded-md">
      <h1>Hello, Home Page!</h1>
      <div className="grid grid-cols-3 gap-3">
        <Link className="text-center capitalize underline hover:text-gray-500" href={"/dashboard"}>Dashboard</Link>
        <Link className="text-center capitalize underline hover:text-gray-500" href={"/team"}>team</Link>
        <Link className="text-center capitalize underline hover:text-gray-500" href={"/products"}>products</Link>
      </div>
    </div>
  );
}
