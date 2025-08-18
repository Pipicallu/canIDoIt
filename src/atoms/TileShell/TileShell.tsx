interface TileShellProps {
  imageSrc: string;
  setCurrentImageUrl: () => void;
}

const TileShell = ({ imageSrc, setCurrentImageUrl }: TileShellProps) => {
  const pathArray = imageSrc.split("/");
  const altText = pathArray[pathArray.length - 1];

  return (
    <button onClick={() => setCurrentImageUrl()}>
      <img src={imageSrc} alt={altText} />
    </button>
  );
};

export default TileShell;
