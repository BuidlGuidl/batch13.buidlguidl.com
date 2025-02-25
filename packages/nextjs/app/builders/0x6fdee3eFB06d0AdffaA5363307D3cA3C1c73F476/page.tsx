import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PortfolioBijoy: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mt-24 items-center w-auto h-auto">
          <Image src="/luffy.webp" alt="profile image" width={200} height={200} className="rounded-lg" />
          <span className="font-mono mt-2 text-2xl font-semibold">Bijoy Roy</span>
        </div>
        <div className="flex mt-5 space-x-5">
          <Link
            href="https://github.com/Bijoy99roy"
            className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full"
          >
            <FaGithub size={30} />
          </Link>

          <Link
            href="https://x.com/__kroy__"
            className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            <FaXTwitter size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bijoy-kumar-roy-4b0975189/"
            className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>

        <div className="flex flex-col bg-base-100 max-w-2xl px-10 py-10 rounded-3xl mt-10">
          <p>👋 Hello, I am Bijoy Roy</p>
          <p>
            I am a data scientist training models, building apps with and without AI. Recently grew interest in Web3 and
            decided to explore and learn web3 development. Recently learned soidity and wrote some contracts and I am
            having fun so far 😎.
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioBijoy;
