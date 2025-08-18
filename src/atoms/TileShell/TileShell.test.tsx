import { render, fireEvent } from "@testing-library/react";
import TileShell from "./TileShell";
import { describe, it, expect, vi } from "vitest";

const renderTile = (src = "../assets/gameAssets/frames/floor_1.png") => {
  const setCurrentImageUrlFn = vi.fn();
  const queries = render(
    <TileShell imageSrc={src} setCurrentImageUrl={setCurrentImageUrlFn} />
  );
  return { ...queries, setCurrentImageUrlFn };
};

describe("TileShell", () => {
  it("renders the basic tile image with correct src and alt", () => {
    const { getByAltText } = renderTile();
    const img = getByAltText("floor_1.png");
    expect(img).toBeVisible();
    expect(img).toHaveAttribute(
      "src",
      "../assets/gameAssets/frames/floor_1.png"
    );
  });

  it("calls callback function when button is clicked", () => {
    const { getByRole, setCurrentImageUrlFn } = renderTile();
    const btn = getByRole("button");
    fireEvent.click(btn);
    expect(setCurrentImageUrlFn).toHaveBeenCalled();
  });
});
