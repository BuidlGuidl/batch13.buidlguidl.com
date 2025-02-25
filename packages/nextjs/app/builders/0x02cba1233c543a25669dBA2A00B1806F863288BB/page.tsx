import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaEnvelope, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const socialLinks = [
  { id: "github", href: "https://github.com/siddhant-k08", icon: <FaGithub size={22} />, label: "GitHub" },
  { id: "telegram", href: "https://t.me/siddhantk08", icon: <FaTelegram size={22} />, label: "Telegram" },
  { id: "twitter", href: "https://x.com/Siddhant8903", icon: <FaTwitter size={22} />, label: "Twitter" },
  {
    id: "email",
    href: "mailto:kulkarni.sid0809@gmail.com",
    icon: <FaEnvelope size={22} />,
    label: "kulkarni.sid0809@gmail.com",
  },
];

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition font-medium"
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const SiddhantProfile: NextPage = () => {
  return (
    <div
      className={`${poppins.variable} font-sans flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12`}
    >
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-8 text-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <Image
            className="rounded-full border-4 border-blue-500 dark:border-blue-400"
            src="/siddhant.jpg"
            width={100}
            height={100}
            alt="Avatar"
          />
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Siddhant</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center font-semibold">
            Masters Student & Web3 Fullstack Dev
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 border-b pb-2">About Me</h2>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
            Hey everyone! My name is Siddhant, and I am a{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">Web3 developer</span> from India.
            Currently, I am pursuing my Masters in{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">Blockchain</span> and am keen on learning
            new technologies while building my skillset. I have been involved in the Web3 space since{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">2021</span>, initially starting by
            collecting and flipping NFTs. I was part of{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">The Graph Advocates Program</span> and am
            now a member of{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">The Graph-BuidlGuidl Cohort</span>, where I
            provide support for the create-eth Subgraph Extension.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Connect with Me</h2>
          <ul className="mt-3 space-y-2">
            {socialLinks.map(({ id, href, icon, label }) => (
              <IconLink key={id} href={href} icon={icon} label={label} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiddhantProfile;
