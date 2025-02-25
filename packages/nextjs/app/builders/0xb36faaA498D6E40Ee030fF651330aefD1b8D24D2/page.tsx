import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { NextPage } from "next";
import { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { GiCrystalGrowth, GiTrophy } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { SiBlockchaindotcom } from "react-icons/si";

export const metadata: Metadata = {
  title: "Ihab Heb",
  description: "Blockchain & AI Developer, BuidlGuidl Builder",
};

const socials = [
  {
    icon: FaGithub,
    url: "https://github.com/hebx",
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com/LordHeb",
  },
  {
    icon: FaTelegram,
    url: "https://t.me/Lord_Heb",
  },
  {
    icon: FaDiscord,
    url: "https://discordapp.com/users/hebx.",
  },
] as const;

const certifications = [
  {
    title: "Certified Expert Solidity & ZK Developer",
    issuer: "Encode Club",
    icon: SiBlockchaindotcom,
  },
  {
    title: "Kernel Fellow KB8",
    issuer: "Gitcoin",
    icon: SiBlockchaindotcom,
  },
  {
    title: "Blockchain & Web3 Workshop Speaker",
    issuer: "Abu Dhabi University",
    icon: HiAcademicCap,
  },
  {
    title: "UTAS Blockchain Event Speaker",
    issuer: "University of Oman",
    icon: HiAcademicCap,
  },
] as const;

const achievements = [
  {
    title: "Mode AI Founders Incubation",
    description: "Top 3 Finalist",
    icon: GiTrophy,
  },
  {
    title: "FutureHack Gitex",
    description: "Top Creative Concept Award by Hackmasters & EmiratesNBD",
    icon: GiCrystalGrowth,
  },
  {
    title: "EthGlobal SuperHack",
    description: "Zora Best Use",
    icon: GiTrophy,
  },
  {
    title: "Eth Online",
    description: "Tableland and Unstoppable Domains Pool Prize winner",
    icon: GiTrophy,
  },
  {
    title: "EthSafari",
    description: "WorldCoinID & Coinbase Prize",
    icon: GiTrophy,
  },
  {
    title: "HackMoney",
    description: "Transak Pool Prize Winner",
    icon: GiTrophy,
  },
] as const;

type CardItem = {
  title: string;
  description?: string;
  issuer?: string;
  icon: IconType;
};

type CardSectionProps = {
  title: string;
  icon: IconType;
  items: readonly CardItem[];
};

const CardSection = ({ title, icon: HeaderIcon, items }: CardSectionProps) => (
  <div className="bg-base-100 rounded-2xl p-8 shadow-lg border border-base-300">
    <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-2">
      <HeaderIcon className="text-primary" />
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map(({ title: itemTitle, description, issuer, icon: Icon }) => (
        <div key={itemTitle} className="bg-base-200 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <Icon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-base-content">{itemTitle}</h3>
              <p className="text-sm text-base-content/70 mt-1">{description || issuer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LordhebProfile: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-12 px-4 bg-gradient-to-br from-base-100 via-base-200 to-base-300">
        <div className="max-w-4xl w-full space-y-8">
          {/* Profile Header */}
          <div className="relative p-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl">
            <div className="flex flex-col items-center space-y-6 bg-base-100 rounded-2xl p-8">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" />
                <div className="absolute inset-[3px] bg-base-100 rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/builders/lordheb.eth.webp"
                    alt="Ihab Heb - Blockchain & AI Developer"
                    fill
                    sizes="160px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ihab Heb
                </h1>
                <p className="text-xl text-base-content/80 font-mono">lordheb.eth</p>
                <p className="text-lg text-base-content/60">Blockchain & AI Developer</p>
              </div>

              {/* Social Links  */}
              <div className="flex justify-center gap-8 pt-4">
                {socials.map(({ icon: Icon, url }) => (
                  <Link
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-content/70 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-7 h-7" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-base-100 rounded-2xl p-8 shadow-lg space-y-6 border border-base-300">
            <h2 className="text-2xl font-bold text-base-content flex items-center gap-2">
              <SiBlockchaindotcom className="text-primary" />
              About Me
            </h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Blockchain & AI Developer contributing to the effective acceleration & interoperability of the web3 space,
              digital public goods and manifesting the futuristic vision of the peoples internet.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-base-content">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {["Solidity", "TypeScript", "Next.js", "Foundry", "AI Agents Framework", "Rust", "Cairo"].map(tech => (
                  <span key={tech} className="px-4 py-2 text-base bg-base-300/50 rounded-lg text-base-content">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <CardSection title="Blockchain Certifications" icon={HiAcademicCap} items={certifications} />

          {/* Achievements Section */}
          <CardSection title="Web3 Hackathons" icon={GiTrophy} items={achievements} />
        </div>
      </div>
    </>
  );
};

export default LordhebProfile;
