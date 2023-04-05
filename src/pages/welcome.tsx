/* eslint-disable @typescript-eslint/no-misused-promises */
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { type GetServerSidePropsContext } from "next";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { LmSqueezy, type IValidateLicenseResponse } from "~/server/license";
import { api } from "~/utils/api";

export const Welcome = (props: IValidateLicenseResponse) => {
  const activeProduct = api.product.active.useMutation();
  const [canActive, setCanActive] = useState(
    props.license_key?.status === "inactive"
  );

  const active = async () => {
    const res = await activeProduct.mutateAsync({
      licenseKey: props.license_key.key,
    });
    if (res) {
      setCanActive(false);
    }
  };
  if (props.error) {
    return <div className="mt-16 text-center">oops, something went wrong</div>;
  }

  const productName = props.meta.product_name;
  return (
    <div className="mt-16 text-center">
      <h1 className="mb-8 text-3xl">
        Thank you for purchasing{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-bold text-transparent">
          {productName}
        </span>{" "}
        🤗
      </h1>

      {canActive ? (
        <Button onClick={active}>Active Now</Button>
      ) : (
        <p className="text-xl">Your license is active 🎉</p>
      )}
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{
    licenseKey: string;
  }>
) => {
  const supabase = createServerSupabaseClient(context);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const returnUrl = context.req.url || "";
  if (!session) {
    return {
      redirect: {
        destination: "/login?returnUrl=" + encodeURIComponent(returnUrl),
        permanent: false,
      },
    };
  }
  const licenseKey = context.query?.licenseKey;
  const lm = new LmSqueezy();
  if (licenseKey) {
    const data = await lm.validateLicense(licenseKey as string);
    return {
      props: data,
    };
  }
  return {
    props: {},
  };
};

export default Welcome;
