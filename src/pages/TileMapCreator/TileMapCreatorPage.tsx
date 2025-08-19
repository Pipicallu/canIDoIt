import TileSetIndex from "../../molecules/TileSetIndex/TilesetIndex";
import { type Dispatch, type SetStateAction } from "react";
import { Flex } from "antd";
import Canvas from "../../atoms/Canvas/Canvas";

interface TileMapCreatorPageProps {
  setCurrentImageUrl: Dispatch<SetStateAction<string>>;
  gameAssets: string[];
}

const TileMapCreatorPage = ({
  setCurrentImageUrl,
  gameAssets,
}: TileMapCreatorPageProps) => {
  return (
    <Flex gap={16}>
      <TileSetIndex
        gameAssets={gameAssets}
        setCurrentImageUrl={setCurrentImageUrl}
      />
      <Canvas
        width={512}
        height={512}
        tileSize={16}
        gridHeight={32}
        gridWidth={32}
      />
    </Flex>
  );
};

export default TileMapCreatorPage;
