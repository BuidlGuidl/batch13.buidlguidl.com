import Image from "next/image";
import { useTicTacToeState } from "./TicTacToeContext";
import { images } from "~~/utils/scaffold-eth/batchMembersImages";

function BatchProfilesPyramid(): JSX.Element {
  // Build pyramid levels
  const pyramidLevels: string[][] = [];
  const remainingImages: string[] = [...images];
  let level: number = 1;
  while (remainingImages.length > 0) {
    const levelImages: string[] = remainingImages.splice(0, level);
    pyramidLevels.push(levelImages);
    level++;
  }
  const { activeImages, ticTacToeWon, showTicTacToe, setShowTicTacToe, setActiveImages } = useTicTacToeState();

  function toggleImage(index: number): void {
    if (ticTacToeWon) {
      const newActiveImages: boolean[] = [...activeImages];
      newActiveImages[index] = !newActiveImages[index];
      setActiveImages(newActiveImages);
    } else if (!showTicTacToe) {
      setShowTicTacToe(true);
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {pyramidLevels.map((levelImages: string[], levelIndex: number) => (
        <div key={levelIndex} className="flex justify-center items-center mb-16 relative">
          {levelImages.map((img: string, i: number) => {
            const globalIndex: number = images.indexOf(img);
            const isActive: boolean = activeImages[globalIndex];
            return (
              <div key={img + i} className="relative mx-4">
                <Image
                  src={img}
                  alt={`Image ${globalIndex + 1}`}
                  width={485}
                  height={485}
                  className={`w-32 h-32 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-30 grayscale"
                  }`}
                  onClick={() => toggleImage(globalIndex)}
                  priority={globalIndex < 3}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default BatchProfilesPyramid;
