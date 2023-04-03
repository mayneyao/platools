"use client";
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { type Database } from "~/lib/database.types";

export function LoginDialog() {
  const supabaseClient = useSupabaseClient<Database>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. */}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Auth
            redirectTo="http://localhost:3000/?writeKey=123"
            appearance={{ theme: ThemeSupa }}
            supabaseClient={supabaseClient}
            providers={["notion"]}
            socialLayout="horizontal"
          />
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
