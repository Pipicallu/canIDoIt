import { render } from "@testing-library/react";
import TileSetIndex from "./TilesetIndex";
import { describe, it, expect, vi } from "vitest";

const renderTile = () => {
  const setCurrentImageUrlFn = vi.fn();
  const assets = [
    "../assets/gameAssets/frames/floor_1.png",
    "../assets/gameAssets/frames/floor_2.png",
    "../assets/gameAssets/frames/floor_3.png",
  ];
  const queries = render(
    <TileSetIndex
      gameAssets={assets}
      setCurrentImageUrl={setCurrentImageUrlFn}
    />
  );
  return { ...queries, setCurrentImageUrlFn };
};

describe("TileSetIndex", () => {
  it("renders the componet an array of tiles", () => {
    const { getAllByRole } = renderTile();
    const buttons = getAllByRole("button");

    expect(buttons.length).toBe(3);
  });
});
