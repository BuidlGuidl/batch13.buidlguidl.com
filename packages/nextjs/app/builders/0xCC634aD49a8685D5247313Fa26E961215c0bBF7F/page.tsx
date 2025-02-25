import Image from "next/image";
import { BuidlGuidlLogo, ENSLogo, FarcasterLogo, GitHubLogo, OpenSeaLogo, XLogo } from "./_components/logos";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Nokcha.eth builder profile",
  description: "BuidlGuidl Batch #13 participant",
});

const links = [
  { name: "X", url: "https://twitter.com/nokcha75", Logo: XLogo },
  { name: "Farcaster", url: "https://warpcast.com/nokcha", Logo: FarcasterLogo },
  { name: "GitHub", url: "https://github.com/nokcha75", Logo: GitHubLogo },
  {
    name: "BuidlGuidl",
    url: "https://app.buidlguidl.com/builders/0xCC634aD49a8685D5247313Fa26E961215c0bBF7F",
    Logo: BuidlGuidlLogo,
  },
  { name: "OpenSea", url: "https://opensea.io/nokcha", Logo: OpenSeaLogo },
  { name: "ENS", url: "https://ens.app/nokcha.eth", Logo: ENSLogo },
];

const Nokcha: NextPage = () => {
  return (
    <div className="text-center mt-8 bg-secondary p-16">
      <Image
        src="/blitnaut.webp"
        alt="Nokcha"
        width={216}
        height={216}
        className="mx-auto rounded-full"
        style={{ width: "auto", height: "auto" }}
      />
      <h1 className="text-4xl my-5">Nokcha.eth</h1>
      <p className="text-neutral mb-5 mx-auto max-w-3xl">
        I&apos;m a student about to finish my Master&apos;s degree in{" "}
        <span className="font-bold">Information Security</span>, and have a strong interest in{" "}
        <span className="font-bold">Ethereum</span>. I&apos;m currently learning more about{" "}
        <span className="font-bold">Solidity</span> with the goal of getting into{" "}
        <span className="font-bold">auditing</span> and
        <span className="font-bold"> security research</span>. I&apos;m also looking forward to{" "}
        <span className="font-bold">contributing to open source</span> and{" "}
        <span className="font-bold">building cool things!</span>
      </p>
      <p className="text-neutral font-bold flex justify-center whitespace-nowrap">────── My links ──────</p>
      <div className="space-x-6 flex justify-center">
        {links.map(({ name, url, Logo }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-250"
            aria-label={name}
          >
            <Logo className="w-8 h-8" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nokcha;
