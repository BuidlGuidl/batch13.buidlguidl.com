import Image from "next/image";
import { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const NickKastenBuilderPage: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-br-lg rounded-bl-lg shadow-md">
      <div className="flex items-center mt-6 mb-6">
        <Image src="/ntk.webp" alt="Nick Kasten" width={128} height={128} className="rounded-full mr-4" />
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Nick Kasten</h1>
      </div>

      <div className="mb-6">
        <Address address="0x0c4d0953b769637de90cc3fe42f6f356543c5a45" format="long" />
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Full-stack software engineer with 5 years of experience in Python and JavaScript/TypeScript. Passionate about
          web3 development and contributing to open-source!
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Contact</h2>
        <address className="not-italic">
          <p className="text-gray-600 dark:text-gray-300">📍 Austin TX, USA</p>
          <a href="mailto:kastencode@gmail.com" className="text-gray-600 dark:text-gray-300">
            📧 kastencode@gmail.com
          </a>
        </address>
      </div>

      <div className="flex space-x-4">
        <a
          href="https://github.com/kastentx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://t.me/kastencode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          <FaTelegram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/kastencode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default NickKastenBuilderPage;
