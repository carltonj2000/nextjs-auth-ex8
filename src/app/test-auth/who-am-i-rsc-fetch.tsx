import { headers } from "next/headers";

export default async function WhoAmI() {
  const { user } = await fetch("http://localhost:3000/api/whoami", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <div className="mt-5">I am {user} - via RSC fetch</div>;
}
