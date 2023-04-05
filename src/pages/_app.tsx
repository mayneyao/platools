import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  type Session,
  SessionContextProvider,
} from "@supabase/auth-helpers-react";
import { type AppProps } from "next/app";
import { useEffect, useState } from "react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "~/components/Layout";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  useEffect(() => {
    supabaseClient.auth
      .getSession()
      .then((session) => {
        // console.log(session);
      })
      .finally(() => {
        // console.log("finally");
      });
  }, [supabaseClient.auth]);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
}

export default api.withTRPC(MyApp);
