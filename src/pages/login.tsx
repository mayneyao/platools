/* eslint-disable @typescript-eslint/no-floating-promises */
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { type Database } from "~/lib/database.types";
import { getRedirectURL } from "~/utils/getRedirectUrl";

const redirectTo = getRedirectURL();

export default function Login() {
  const supabaseClient = useSupabaseClient<Database>();
  const router = useRouter();

  const returnUrl = (router.query?.returnUrl as string) || "";
  const path = decodeURIComponent(returnUrl);
  useEffect(() => {
    const sub = supabaseClient.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push(path);
      }
    });
    return () => sub.data.subscription.unsubscribe();
  }, [path, router, supabaseClient]);

  return (
    <div className="m-auto mt-16 max-w-md">
      <Auth
        redirectTo={redirectTo}
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={["notion"]}
        socialLayout="horizontal"
      />
    </div>
  );
}
