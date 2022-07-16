import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client"
import Layout from "./layout";
import Head from "next/head";
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
          <Head>
              <title>Tech assignment</title>
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  )
}
