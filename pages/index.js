import { useState } from "react";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import User from "../components/User";

export default function Home() {
  const [session, setSession] = useState(false);

  return (
    <Layout title="Home">
      {session ? <User /> : <Hero />}
    </Layout>
  )
}

