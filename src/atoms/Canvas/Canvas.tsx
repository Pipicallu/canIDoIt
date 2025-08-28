import { useRef, useEffect } from "react";

const handleMouseLocation = (
  e: React.MouseEvent<HTMLCanvasElement>,
  tileSize: number,
  context: CanvasRenderingContext2D
) => {
  const canvas = e.currentTarget;
  // this gives the position and size of the canvas in viewport
  const rect = canvas.getBoundingClientRect();

  // rect.width or rect.height is the width and height of the canvas as it appears on screen, in CSS pixels.
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  console.log(canvas.width, rect.width);

  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;

  const tileX = Math.floor(x / tileSize);
  const tileY = Math.floor(y / tileSize);

  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw the blue border
  context.strokeStyle = "blue";
  context.lineWidth = 3;
  context.strokeRect(tileX * tileSize, tileY * tileSize, tileSize, tileSize);

  console.log(`Tile Coords:( ${tileX}, ${tileY})`);
  return `(${tileX}, ${tileY})`;
};

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
  gridHeight?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    contextRef.current = context;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: "1px solid black" }}
      onMouseMove={(e) =>
        contextRef.current &&
        handleMouseLocation(e, tileSize, contextRef.current)
      }
    ></canvas>
  );
};

export default Canvas;
