export const gameAssets = import.meta.glob(
  "../assets/gameAssets/tiles/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

export const gameAssetsPathsArray = Object.values(gameAssets).map(
  (object) => object.default
);
