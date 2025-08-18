export const gameAssets = import.meta.glob(
  "../assets/gameAssets/frames/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

export const gameAssetsPathsArray = Object.values(gameAssets).map(
  (mod) => mod.default
);

console.log(gameAssets);
