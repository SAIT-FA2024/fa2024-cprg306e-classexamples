// Pages and Components - Capital Case - MyFirstFunction
// Utility Functions - Camel Case - myFirstFunction

import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFirstComponent />
      <h2>Class Example Links</h2>
      <ul>
        <li>
          <Link href="./week-2/" className="underline text-cyan-600 hover:text-cyan-300">Week 2 - Introduction to React</Link>
        </li>
      </ul>
    </main>
  );
}
