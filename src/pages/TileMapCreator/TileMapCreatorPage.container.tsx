import { useState } from "react";
import { gameAssetsPathsArray } from "../../utils/readDir";
import TileMapCreatorPage from "./TileMapCreatorPage";
import { Flex } from "antd";
import Canvas from "../../atoms/Canvas/Canvas";

const TileMapCreatorPageContainer = () => {
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  console.log(currentImageUrl);
  return (
    <TileMapCreatorPage
      gameAssets={gameAssetsPathsArray}
      setCurrentImageUrl={setCurrentImageUrl}
    />
  );
};

export default TileMapCreatorPageContainer;
