"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function SecretInfo() {
  const { isConnected } = useAccount();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted && isConnected ? (
        <p>I am also a book lover, a great swimmer and a fan of the outdoors.</p>
      ) : (
        <p>PS: Connect your wallet for some secret info</p>
      )}
    </div>
  );
}
