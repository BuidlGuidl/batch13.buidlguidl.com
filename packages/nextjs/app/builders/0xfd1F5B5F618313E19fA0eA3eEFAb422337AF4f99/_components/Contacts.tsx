import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const contactLinks = [
  {
    type: "address",
    value: "0xfd1F5B5F618313E19fA0eA3eEFAb422337AF4f99",
  },
  {
    type: "github",
    value: "hara-desu",
    url: "https://github.com/hara-desu",
    icon: FaGithub,
  },
  {
    type: "telegram",
    value: "@konyangichu",
    url: "https://t.me/konyangichu",
    icon: FaTelegram,
  },
  {
    type: "twitter",
    value: "@ladazimina13",
    url: "https://twitter.com/ladazimina13",
    icon: FaTwitter,
  },
  {
    type: "warpcast",
    value: "@ladawinter",
    url: "https://warpcast.com/ladawinter",
    label: "Warpcast:",
  },
];

const Contacts = () => {
  return (
    <div className="flex flex-col ml-12">
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4 px-4">
        {contactLinks.map((contact, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="hidden sm:inline mx-2">·</span>}

            {contact.type === "address" ? (
              <Address address={contact.value} />
            ) : (
              <a
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                {contact.icon && <contact.icon size={24} />}
                {contact.label && <span className="font-semibold">{contact.label}</span>}
                <span className="text-sm">{contact.value}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
