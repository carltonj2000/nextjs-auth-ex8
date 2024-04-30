import { auth } from "@/auth";
import WhoAmI from "./who-am-i";
import WhoAmIApi from "./who-am-i-api";
import WhoAmIRscFetch from "./who-am-i-rsc-fetch";

export default async function TestAuth() {
  const session = await auth();

  async function onGetUserAction() {
    "use server";
    const session = await auth();
    return session?.user?.name ?? null;
  }

  return (
    <main>
      <h1 className="text-3xl mb-5">Auth Test Route</h1>
      <div>I am {session?.user?.name} - via RSC</div>
      <WhoAmI onGetUserAction={onGetUserAction} />
      <WhoAmIApi />
      <WhoAmIRscFetch />
    </main>
  );
}
