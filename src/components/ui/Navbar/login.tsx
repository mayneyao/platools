/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { LogOut, Package2, Settings, User } from "lucide-react";
import { LoginDialog } from "~/components/LoginDialog";
import { type Database } from "~/lib/database.types";

export function Login() {
  const supabaseClient = useSupabaseClient<Database>();

  const signOut = async () => {
    await supabaseClient.auth.signOut();
    // session.signOut();
  };
  const user = useUser();

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {user?.user_metadata.avatar_url && (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <AvatarImage src={user.user_metadata.avatar_url ?? ""} />
            )}
            <AvatarFallback>
              {user?.user_metadata.name ?? user?.email?.[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Package2 className="mr-2 h-4 w-4" />
              <span>Apps</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          {/* <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <>
      <LoginDialog />
    </>
  );
}

// import { Button } from "@/components/ui/button"
