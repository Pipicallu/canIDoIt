import { type Dispatch, type SetStateAction } from "react";
import { Button, Image } from "antd";

interface TileShellProps {
  imageSrc: string;
  setCurrentImageUrl: Dispatch<SetStateAction<string>>;
}

const TileShell = ({ imageSrc, setCurrentImageUrl }: TileShellProps) => {
  const pathArray = imageSrc.split("/");
  const altText = pathArray[pathArray.length - 1];

  return (
    <Button
      style={{ borderRadius: 0 }}
      onClick={() => setCurrentImageUrl(imageSrc)}
    >
      <Image preview={false} src={imageSrc} alt={altText} />
    </Button>
  );
};

export default TileShell;
