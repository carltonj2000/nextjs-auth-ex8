"use client";

import { useEffect, useState } from "react";

export default function WhoAmI() {
  const [user, userSet] = useState<string | null>();

  useEffect(() => {
    fetch("/api/whoami")
      .then((res) => res.json())
      .then(({ user }) => userSet(user));
  }, []);

  return <div className="mt-5">I am {user}</div>;
}
