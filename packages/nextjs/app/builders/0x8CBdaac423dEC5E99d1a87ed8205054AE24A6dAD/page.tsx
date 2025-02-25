import Image from "next/image";
import type { NextPage } from "next";

const BuilderPage: NextPage = () => {
  const socials = [
    { name: "Github", link: "https://github.com/lenoteddy", color: "text-gray-500" },
    { name: "Telegram", link: "https://t.me/teddyleno", color: "text-sky-500" },
    { name: "X", link: "https://x.com/lenoteddy", color: "text-gray-900" },
    { name: "Discord", link: "https://discordapp.com/users/874985086565613598", color: "text-purple-500" },
  ];

  return (
    <div className="max-w-lg mx-auto pt-10 px-5">
      <h1 className="text-center mb-4">
        <div className="text-2xl mb-2">👋🏻 Hi, everyone!</div>
        <div className="text-4xl">
          <span className="pr-2">My name is</span>
          <span className="font-bold">Teddy Leno</span>
        </div>
      </h1>
      <Image
        src={`/pfp-0x8CBdaac423dEC5E99d1a87ed8205054AE24A6dAD.jpg`}
        alt="profile picture"
        width={256}
        height={256}
        className="object-cover mx-auto rounded-xl shadow-xl"
      />
      <br />
      <p className="-mb-4 text-lg">ℹ️ Here is some information about me:</p>
      <p className="text-md text-justify">
        I am a Software Developer with 3 years of experience in blockchain development and 8 years of expertise in both
        frontend and backend development. At the core of my blockchain expertise is Solidity, which I leverage to build
        secure and efficient smart contracts. My technical proficiency also includes SQL, PHP, HTML, CSS, JavaScript,
        and Typescript, as well as deep experience with ReactJS, React Native, NodeJS, and NextJS for creating
        intuitive, responsive applications. Furthermore, I utilize Ethers.js, Web3.js, and Hardhat to develop
        cutting-edge decentralized applications (dApps) that are scalable and innovative.
      </p>
      <br />
      <p className="mb-0 text-lg">🔗 Follow me on:</p>
      <ul className="flex items-center gap-x-4">
        {socials.map((val, key) => {
          return (
            <li key={key}>
              <a
                href={val.link}
                className={`underline font-bold ${val.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {val.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BuilderPage;
