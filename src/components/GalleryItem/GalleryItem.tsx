import {
  Image,
  ItemContainer,
  LightBox,
  Actions,
  ActionButton,
  LigtboxImage,
  Description,
  DescriptionText,
  VisitLinkBtn,
} from "./style";
import {
  AiOutlineClose,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from "react-icons/ai";

import { HiOutlineExternalLink } from "react-icons/hi";
import { MouseEvent, useEffect, useRef, useState } from "react";

const GalleryItem: React.FC<GalleryItemProps> = ({
  coverImage,
  alt,
  description,
  visitLink,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zooming, setZooming] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!zooming && imageRef.current) {
      imageRef.current!.style.top = "";
      imageRef.current!.style.left = "";
    }
  }, [zooming]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightboxOpen]);

  return (
    <>
      <ItemContainer data-aos="zoom-in" onClick={handleImageClick}>
        <Image src={coverImage} alt={alt} layout="fill" />
      </ItemContainer>
      {lightboxOpen && (
        <LightBox>
          <Actions>
            <ActionButton onClick={handleZoomButtonClick}>
              {zooming ? <AiOutlineZoomOut /> : <AiOutlineZoomIn />}
            </ActionButton>
            <ActionButton onClick={() => setLightboxOpen(false)}>
              <AiOutlineClose />
            </ActionButton>
          </Actions>
          {(description || visitLink) && (
            <Description>
              {description && (
                <DescriptionText hasVisitLink={!!visitLink}>
                  {description}
                </DescriptionText>
              )}
              {visitLink && (
                <VisitLinkBtn href={visitLink} target="_blank">
                  Visitar <HiOutlineExternalLink />
                </VisitLinkBtn>
              )}
            </Description>
          )}
          <LigtboxImage
            src={coverImage}
            alt={alt}
            zooming={zooming}
            grabbing={grabbing}
            ref={imageRef}
            onMouseDown={() => setGrabbing(zooming ? true : false)}
            onMouseUp={(e) => {
              setGrabbing(false);
              imageRef.current!.style.transform = "";
            }}
            onMouseMove={handleLightboxImageMouseMove}
          />
        </LightBox>
      )}
    </>
  );

  function handleLightboxImageMouseMove(e: MouseEvent) {
    e.preventDefault();

    if (!zooming || !grabbing) return;

    const movementX = e.movementX;
    const movementY = e.movementY;

    const currentLeft = pxToNum(imageRef.current!.style.left);
    const newLeft = currentLeft + movementX;

    const currentTop = pxToNum(imageRef.current!.style.top);
    const newTop = currentTop + movementY;

    imageRef.current!.style.left = newLeft + "px";
    imageRef.current!.style.top = newTop + "px";

    function pxToNum(px: string): number {
      const match = px.match(/-?\d+/);

      if (!match) return 0;

      return parseFloat(match![0]);
    }
  }

  function handleZoomButtonClick() {
    setZooming((previousValue) => !previousValue);
  }

  function handleImageClick() {
    setLightboxOpen(true);
  }
};

export default GalleryItem;
