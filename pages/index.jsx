import Head from "next/head";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn</title>
        <meta name="description" content="LinkedIn App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl" a>
        Hello
      </h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
