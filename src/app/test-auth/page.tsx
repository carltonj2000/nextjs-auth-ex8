import { auth } from "@/auth";
import WhoAmI from "./who-am-i";
import WhoAmIApi from "./who-am-i-api";

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
      <div>User: {session?.user?.name}</div>
      <WhoAmI onGetUserAction={onGetUserAction} />
      <WhoAmIApi />
    </main>
  );
}
