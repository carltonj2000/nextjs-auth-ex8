"use client";

import { signIn, signOut } from "@/auth/helpers";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data.user.name} : Sign Out
    </Button>
  ) : (
    <Button onClick={async () => await signIn()}>Sign In</Button>
  );
}
