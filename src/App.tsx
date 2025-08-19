import "./App.css";
import { TileMapCreatorPage } from "./pages";

function App() {
  return (
    <>
      <div style={{ marginBottom: "16px" }}>Game assets</div>
      <TileMapCreatorPage />
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
