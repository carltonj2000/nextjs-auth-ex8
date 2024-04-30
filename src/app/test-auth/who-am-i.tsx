"use client";

import { useEffect, useState } from "react";

export default function WhoAmI({
  onGetUserAction,
}: {
  onGetUserAction: () => Promise<string | null>;
}) {
  const [user, userSet] = useState<string | null>();

  useEffect(() => {
    onGetUserAction().then((user) => userSet(user));
  }, [onGetUserAction]);

  return <div className="mt-5">I am {user}</div>;
}
