import Image from "next/image";

const projects = [
  {
    name: "AgentMarket",
    image:
      "https://emerald-many-salmon-332.mypinata.cloud/ipfs/bafkreia7t5mbdwxycgq4hyrgjohmbuscmznqxpiclerm3md4abftbbmixi",
    link: "https://github.com/hara-desu/AgentMarket",
    description: "A decentralized marketplace for AI agents built during the Agentic Ethereum hackathon.",
  },
  {
    name: "DeepFundingMiniContest",
    image:
      "https://emerald-many-salmon-332.mypinata.cloud/ipfs/bafkreibem2vjbn5vhjc4tzdwi5grm4not4syj23c54wqrzlldmpbtzgmjm",
    link: "https://github.com/hara-desu/DeepFundingMiniContest",
    description: "An AI model designed to fund open-source projects for the Deep Funding contest.",
  },
  {
    name: "CryptoRiskFactors",
    image:
      "https://emerald-many-salmon-332.mypinata.cloud/ipfs/bafybeiahgglg5rjrkmtfsyvsfu475x4iz2zcw3nm7ccvsrmgt5jnflxqse",
    link: "https://github.com/hara-desu/CryptoRiskFactors",
    description: "A project analyzing risk factors in cryptocurrency markets.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col ml-12">
      {/* Description */}
      <div className="flex flex-col space-y-1 py-3">
        <h1 className="text-3xl text-indigo-400 my-0 px-12">About me</h1>
        <div className="text-neutral text-xl px-12 mt-0 space-y-2">
          <p>
            Previous to Masters studies I have worked as a{" "}
            <span className="text-indigo-400 font-semibold">finance specialist in the automotive industry</span>.
          </p>
          <p>
            My skills include <span className="text-blue-400 font-semibold">Python, Solidity, SQL, R, TypeScript</span>.
          </p>
          <p>
            At university I have taken courses on{" "}
            <span className="text-indigo-400 font-semibold">
              Data Analysis, Statistics, AI Safety, Machine Learning, and Blockchains
            </span>
            .
          </p>
          <p>
            I have participated in several <span className="text-blue-400 font-semibold">EthGlobal hackathons</span>,
            finished <span className="text-blue-400 font-semibold">Speedrun Ethereum</span>, and built an{" "}
            <span className="text-indigo-400 font-semibold">AI model for funding open-source projects</span> for the
            Deep Funding contest.
          </p>
          <p>
            Recently, I have made a{" "}
            <span className="text-blue-400 font-semibold">decentralized marketplace for AI agents</span> for the Agentic
            Ethereum hackathon.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col mt-4 px-12">
        <h2 className="text-2xl text-indigo-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-600 rounded-lg p-4 shadow-lg">
              <div className="relative w-full h-48">
                <Image src={project.image} alt={project.name} fill className="object-cover rounded-lg" />
              </div>
              <h3 className="text-lg text-blue-400 mt-2">{project.name}</h3>
              <p className="text-neutral text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline mt-2 block"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
