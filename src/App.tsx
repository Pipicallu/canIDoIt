import "./App.css";
// import Canvas from "./atoms/Canvas/Canvas";
import { gameAssetsPathsArray } from "./utils/readDir";
import TileSetIndex from "./molecules/TileSetIndex/TilesetIndex";

function App() {
  return (
    <>
      <div style={{ marginBottom: "16px" }}>Game assets</div>
      <TileSetIndex
        gameAssets={gameAssetsPathsArray}
        setCurrentImageUrl={() => console.log("hi")}
      />
      {/* <Canvas
        width={512}
        height={512}
        tileSize={16}
        gridHeight={32}
        gridWidth={32}
      /> */}
    </>
  );
}

export default App;
