type GameAsset = { default: string };

export const gameAssets: Record<string, GameAsset> = import.meta.glob(
  "../assets/gameAssets/tiles/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

export const gameAssetsPathsArray = Object.values(gameAssets).map((object) => {
  console.log(object);
  return object.default;
});
