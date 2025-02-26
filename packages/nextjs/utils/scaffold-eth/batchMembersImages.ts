export const images: string[] = [
  "/ntk.webp",
  "/nft.jpg",
  "/diego-profile-pic.webp",
  "/buidlguidl_punk.png",
  "https://i.pinimg.com/474x/d7/31/4c/d7314c015805cbf159e1099c869233ee.jpg",
  "/luffy.webp",
  "/pfp-0x8CBdaac423dEC5E99d1a87ed8205054AE24A6dAD.jpg",
  "/punkvibes.png",
  "/blitnaut.webp",
  "https://emerald-many-salmon-332.mypinata.cloud/ipfs/bafkreie42v4sxapftnagsrxodxvyab6mq546pvlxlucieitgruzoj7q2qe",
];

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Create a copy to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

export const randomImages: string[] = shuffleArray(images);
