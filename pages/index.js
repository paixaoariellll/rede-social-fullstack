import { getSession, useSession } from "next-auth/react";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import User from "../components/User";

export default function Home() {
  const { data: session } = useSession()

  return (
    <Layout title="Home">
      {session ? <User /> : <Hero />}
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return {
    props: { session }
  }
}