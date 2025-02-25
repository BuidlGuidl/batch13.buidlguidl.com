import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPhone } from "react-icons/fa";

const PersonalPage: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-blue-500">
            <Image src="/nft.jpg" alt="Avatar" width={128} height={128} className="object-cover" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Arnav Kirti</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
            Blockchain Developer & Software Engineer
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">IIT Roorkee, India</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <SocialLink href="https://arnavkirti.github.io/" icon={<FaGlobe size={20} />} label="Portfolio" />
            <SocialLink
              href="https://www.linkedin.com/in/arnav-kirti-49616a1b9/"
              icon={<FaLinkedin size={20} />}
              label="LinkedIn"
            />
            <SocialLink href="https://github.com/arnavkirti" icon={<FaGithub size={20} />} label="GitHub" />
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <SocialLink
              href="mailto:arnav_k@mt.iitr.ac.in"
              icon={<FaEnvelope size={20} />}
              label="arnav_k@mt.iitr.ac.in"
            />
            <SocialLink href="tel:+917599988813" icon={<FaPhone size={20} />} label="+91 7599988813" />
          </div>
          <div className="mt-6 text-center px-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hi, I&apos;m Arnav—a passionate developer exploring blockchain and decentralized systems. I’m currently
              pursuing my B.Tech at IIT Roorkee and love creating secure, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
    >
      {icon}
      <span className="hidden sm:inline-block text-sm">{label}</span>
    </Link>
  );
};

export default PersonalPage;
