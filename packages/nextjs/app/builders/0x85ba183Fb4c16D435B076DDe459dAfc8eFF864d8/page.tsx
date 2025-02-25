import type React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const IAbdulkarimPortfolio: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200 dark:bg-base-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-base-100 dark:bg-base-100 shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-primary text-primary-content">
          <h1 className="text-3xl font-bold">Ibrahim AbdulKarim</h1>
          <p className="mt-1 max-w-2xl text-sm">Software Developer & Web3 Engineer</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-semibold text-base-content mb-4">About Me</h2>
          <p className="text-base-content mb-6">
            I&apos;m a passionate software developer and web3 engineer, currently working on building{" "}
            <Link href="https://arbilearn.club" className="text-blue-500 hover:text-blue-700">
              Arbilearn
            </Link>{" "}
            - a comprehensive web3 educational platform. Arbilearn is designed to bridge the knowledge gap in the web3
            space, offering interactive courses, hands-on tutorials, and a supportive community for both beginners and
            advanced learners. Our mission is to make web3 education accessible, engaging, and practical for everyone.
          </p>
          <h3 className="text-xl font-semibold text-base-content mb-2">Arbilearn</h3>
          <p className="text-base-content mb-6">
            Arbilearn is a cutting-edge educational platform designed to make web3 concepts accessible to everyone. From
            beginners to advanced users, our interactive lessons and hands-on approach simplify complex blockchain
            topics, fostering a community of informed and empowered individuals in the rapidly evolving world of
            decentralized technologies.
          </p>
          <p className="text-base-content mb-6">
            Explore Arbilearn:{" "}
            <a
              href="https://arbilearn.club"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              arbilearn.club
            </a>
          </p>
          <h2 className="text-2xl font-semibold text-base-content mb-4">Connect with Me</h2>
          <ul className="space-y-3">
            <SocialLink href="https://x.com/iabdulkarim472" icon={<FaTwitter size={20} />} label="Twitter" />
            <SocialLink href="https://github.com/aliveevie" icon={<FaGithub size={20} />} label="GitHub" />
            <SocialLink
              href="https://discord.com/users/ibrahimabdulkarim"
              icon={<FaDiscord size={20} />}
              label="Discord: ibrahimabdulkarim"
            />
            <SocialLink href="https://t.me/ibrahim_193" icon={<FaTelegram />} label="Telegram: @ibrahim_193" />
            <SocialLink
              href="mailto:ibrahimabdulkarim193@gmail.com"
              icon={<EnvelopeIcon className="w-5 h-5" />}
              label="Email: ibrahimabdulkarim193@gmail.com"
            />
            <SocialLink
              href="tel:+2348138300357"
              icon={<PhoneIcon className="w-5 h-5" />}
              label="Phone: +2348138300357"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default IAbdulkarimPortfolio;
