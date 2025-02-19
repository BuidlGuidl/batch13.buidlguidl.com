import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaGithub } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const StrapchayProfile: NextPage = () => {
  return (
    <>
      <div className="flex items-center gap-4 flex-col pt-10 w-[70%] mx-auto max-md:w-[85%]">
        <section id="imageAndLinks" className="flex gap-2">
          <div className="w-[8rem] h-32 border-2">
            <Image className="w-full h-full" src="/punkvibes.png" alt="Profile picture" width={500} height={500} />
          </div>
          <div className="w-8 flex flex-col justify-evenly">
            <Link href="https://github.com/strapchay">
              <FaGithub size={30} />
            </Link>
            <Link href="https://x.com/strapchay">
              <FaXTwitter size={30} />
            </Link>
            <Link href="https://t.me/yahcparts">
              <FaTelegram size={30} />
            </Link>
          </div>
        </section>

        <section
          id="title"
          className="gap-[2px] flex items-center flex-col bg-stone-200 dark:bg-zinc-500 rounded px-4 py-2 dark:text-slate-200 text-zinc-500"
        >
          <h3 className="font-bold">Strapchay</h3>
          <p className="m-0 text-xs italic lowercase">Full-Stack Web Dev &amp; Web3 Developer</p>
        </section>

        <section
          id="details"
          className="w-[50%] max-sm:w-[65%] justify-center text-justify mt-4 dark:bg-slate-500 rounded-xl px-4 py-2 dark:text-sky-950 bg-zinc-400 text-sl"
        >
          <p className="m-0">
            Hi all! I&apos;m a full-stack web developer with 3+ years experience. My programming languages are Python,
            JavaScript, and Solidity. Recently found a new interest in web3 and started my journey around 5 months ago.
            I am awed by web3&apos;s potential to contribute and how much it has contributed to the public good and
            would love to be a part of that.
          </p>
          <br />
          <p className="m-0">
            I am a lifelong learner and a problem-solver. I am open to collaborating and working on exciting projects.
          </p>
        </section>
      </div>
    </>
  );
};

export default StrapchayProfile;
