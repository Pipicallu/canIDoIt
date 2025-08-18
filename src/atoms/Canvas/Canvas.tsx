import { useRef, useEffect } from "react";
import floorTile from "/src/assets/gameAssets/frames/floor_1.png";
import topTile from "/src/assets/gameAssets/frames/wall_mid.png";
import topBorder from "/src/assets/gameAssets/frames/wall_top_mid.png";

const Canvas = ({
  width,
  height,
  tileSize,
  gridWidth,
  gridHeight,
}: {
  width: number;
  height: number;
  tileSize: number;
  gridWidth?: number;
  gridHeight: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const floorTileImage = new Image();
    floorTileImage.src = floorTile;

    const topWallTileImage = new Image();
    topWallTileImage.src = topTile;

    const topBorderTileImage = new Image();
    topBorderTileImage.src = topBorder;

    const canvasWidth = gridWidth || tileSize / 2;
    const canvasHeight = gridHeight || tileSize / 2;

    const drawTile = (row: number, col: number) => {
      const x = col * tileSize;
      const y = row * tileSize;

      const topTile = row === 1;
      const topBorder = row === 0;
      const tileHierarchy = () => {
        if (topBorder) {
          return topBorderTileImage;
        } else if (topTile) {
          return topWallTileImage;
        } else {
          return floorTileImage;
        }
      };

      const tile = tileHierarchy();
      context.drawImage(tile as CanvasImageSource, x, y, tileSize, tileSize);
    };

    for (let row = 0; row < canvasHeight; row++) {
      for (let col = 0; col < canvasWidth; col++) {
        drawTile(row, col);
      }
    }
  });
  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default Canvas;
