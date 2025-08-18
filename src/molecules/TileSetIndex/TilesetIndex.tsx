import TileShell from "../../atoms/TileShell/TileShell";

interface TileSetIndexProps {
  gameAssets: string[];
  setCurrentImageUrl: () => void;
}
const TileSetIndex = ({
  gameAssets,
  setCurrentImageUrl,
}: TileSetIndexProps) => {
  return (
    <div>
      {gameAssets.map((assetPath) => {
        return (
          <TileShell
            key={assetPath}
            setCurrentImageUrl={setCurrentImageUrl}
            imageSrc={assetPath}
          />
        );
      })}
    </div>
  );
};

export default TileSetIndex;
