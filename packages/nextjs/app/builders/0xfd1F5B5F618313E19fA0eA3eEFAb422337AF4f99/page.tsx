import Image from "next/image";
import About from "./_components/About";
import Contacts from "./_components/Contacts";
import Description from "./_components/Description";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Lada",
  description: "This is Lada's personal page.",
});

const Profile: NextPage = () => {
  return (
    <>
      <div className="py-7">
        <div className="flex justify-center items-start">
          {/* My photo */}
          <div className="avatar">
            <div className="w-48 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="https://emerald-many-salmon-332.mypinata.cloud/ipfs/bafkreie42v4sxapftnagsrxodxvyab6mq546pvlxlucieitgruzoj7q2qe"
                alt="Profile Picture"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <Description />
      </div>

      <div className="py-2">
        <Contacts />
      </div>

      <div className="py-7">
        <About />
      </div>
    </>
  );
};

export default Profile;
