/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/router";

export default function ActivePage() {
  const [key, setKey] = useState("");
  const router = useRouter();
  const active = async () => {
    await router.push("/welcome?licenseKey=" + key);
  };
  const disabled = !key;
  return (
    <div className="mx-auto mt-16 flex max-w-md flex-col gap-2 text-center sm:max-w-sm  sm:gap-4 md:flex-row">
      <Input value={key} onChange={(e) => setKey(e.target.value)} />{" "}
      <Button disabled={disabled} onClick={active}>
        Active
      </Button>
    </div>
  );
}
