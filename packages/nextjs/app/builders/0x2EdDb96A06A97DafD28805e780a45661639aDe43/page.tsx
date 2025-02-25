import Image from "next/image";
import Link from "next/link";
import Greeter from "./components/Greeter";
import SecretInfo from "./components/SecretInfo";
import { NextPage } from "next";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const DiegoPortfolio: NextPage = () => {
  return (
    <div>
      <div id="Portfolio-Container" className="bg-center m-6 flex flex-col items-center">
        <div
          id="Image-container"
          className="pt-4 pb-0 pl-4 pr-4 w-72 h-72 flex justify-center items-center flex-shrink-0"
        >
          <Image
            src="/diego-profile-pic.webp"
            alt="A picture of Diego"
            width={240}
            height={240}
            className="rounded-badge"
          />
        </div>
        <div id="Title-Container" className="pt-0 pb-0 pl-4 pr-4 mt-3 text-center">
          <h1 className="text-6xl font-bold mb-4">Diego Gil Page</h1>
          <div id="Social-Networks" className="flex justify-center space-x-5 mt-4">
            <Link
              href="https://github.com/diego-g-o"
              className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/diegogilo/"
              className="transition duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>

        <div id="text-content" className=" max-w-4xl pt-4 pb-0 pl-4 pr-4 text-center ">
          <Greeter />
          <p className="mb-4 text-justify">
            My name is Diego, I am an Architect, project manager and beginner developer with a decade of experience in
            social impact programs for NGOs, specializing in the design and execution of community-led projects.
            Currently I work at{" "}
            <Link href="https://www.aprendo.cc" className="text-blue-400 hover:text-blue-300">
              APRENDO
            </Link>
            , a Non-profit where we teach technology and Blockchain to underserved communities across LATAM. And in 2025
            I would love to start coding blockchain-based solutions for real-world challenges alongside the communities
            we work with.
          </p>
          <SecretInfo />
        </div>
      </div>
    </div>
  );
};

export default DiegoPortfolio;
