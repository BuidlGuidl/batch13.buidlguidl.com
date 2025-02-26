import Image from "next/image";
import { NextPage } from "next";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const DopeBuilderPage: NextPage = () => {
  const location = "Lagos, Nigeria";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white opacity-10 -mt-8 -mr-8"></div>
          <div className="absolute bottom-0 left-12 w-16 h-16 rounded-full bg-white opacity-10 -mb-4"></div>

          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src="/dope.webp"
                alt="dope"
                width={128}
                height={128}
                className="h-24 w-24 rounded-full border-4 border-white shadow-md object-cover "
              />
            </div>
            <div className="ml-2 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-white">Zee Dope</h1>
              <div className="mt-2 inline-flex px-1 py-1 rounded-lg bg-white bg-opacity-20 text-white text-[6px] font-mono">
                <Address address="0x202305d5B90bEcDdE339e2C32bCcBa50979d1F12" format="short" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Bio */}
          <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Full-stack software developer with years of experience. Passionate about web3 development and
                contributing to open-source projects!
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Specializing in React, Node.js, and Solidity. Currently building DeFi applications and exploring
                zero-knowledge proofs. Contributor to <span className="font-medium">Ethereum</span> ecosystems.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact Information</h2>

            <div className="space-y-3">
              <address className="not-italic">
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <CiLocationOn />
                    <span>{location}</span>
                  </a>
                </div>

                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <CiMail />
                  <a href="mailto:0xDopezee@gmail.com" className="hover:text-blue-500 transition-colors">
                    0xDopezee@gmail.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/SARUMI558"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://t.me/Dope_zee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DopeBuilderPage;
