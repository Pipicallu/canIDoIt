import TileShell from "../../atoms/TileShell/TileShell";
import { type Dispatch, type SetStateAction } from "react";
import { Layout, Row, Col } from "antd";

interface TileSetIndexProps {
  gameAssets: string[];
  setCurrentImageUrl: Dispatch<SetStateAction<string>>;
}
const TileSetIndex = ({
  gameAssets,
  setCurrentImageUrl,
}: TileSetIndexProps) => {
  return (
    <Row gutter={1}>
      {gameAssets.map((assetPath) => (
        <Col key={assetPath} span={6}>
          <TileShell
            setCurrentImageUrl={setCurrentImageUrl}
            imageSrc={assetPath}
          />
        </Col>
      ))}
    </Row>
  );
};

export default TileSetIndex;
