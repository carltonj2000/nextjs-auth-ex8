import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import AuthButton from "./auth-button.server";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <Link href="/api/auth/signup">
        <Button>Sign Up</Button>
      </Link>
      <AuthButton />
    </>
  );
}
