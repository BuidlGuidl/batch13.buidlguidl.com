"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

export default function Greeter() {
  const { address: visitorAddress, isConnecting, isDisconnected } = useAccount();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isConnecting) {
    return <div>Working on it...</div>;
  }

  return (
    <div>
      {isDisconnected || !visitorAddress ? (
        <p>Hello Anon</p>
      ) : (
        <div className="flex items-center justify-center gap-1">
          <p>Hello connected user:</p>
          <Address address={visitorAddress} />
        </div>
      )}
    </div>
  );
}
