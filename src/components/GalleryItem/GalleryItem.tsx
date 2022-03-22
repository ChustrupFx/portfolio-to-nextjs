import { Image, ItemContainer } from "./style";

const GalleryItem: React.FC<GalleryItemProps> = ({ coverImage, alt }) => {
  return (
    <ItemContainer>
      <Image src={coverImage} alt={alt} layout="fill" />
    </ItemContainer>
  );
};

export default GalleryItem;
