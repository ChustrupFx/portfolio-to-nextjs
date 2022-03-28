import GalleryItem from "../GalleryItem/GalleryItem";

import { GalleryContent } from "./style";

const Gallery: React.FC = () => {
  return (
    <GalleryContent>
      <GalleryItem
        coverImage="/images/franquiamaisagil.webp"
        alt="Franquia Mais Agil"
        description="Website Franquia Mais Ágil"
        visitLink="https://franquiamaisagil.com"
      />
      <GalleryItem
        coverImage="/images/seg-pet.webp"
        alt="Seg Pet"
        description="Website Seg Pet"
        visitLink="https://seg.pet"
      />
      <GalleryItem
        coverImage="/images/espiritismoeluz.webp"
        alt="Espiritismo e Luz"
        description="Website Espiritismo é Luz"
        visitLink="https://espiritismoeluz.com.br/"
      />
      <GalleryItem
        coverImage="/images/dominandooexcel.webp"
        alt="Dominando o Excel"
        description="Website Dominando Excel"
        visitLink="https://dominandoexcel.com.br/"
      />
      <GalleryItem
        coverImage="/images/interpretacao-de-texto-landing-page.webp"
        alt="Landing Page Interpretacao de Texto"
        description="Landing Page Curso de Interpretação de Texto"
      />
      <GalleryItem
        coverImage="/images/segpet-form.webp"
        alt="Seg Pet Form"
        description="Formulário Seg Pet"
        visitLink="https://pet.esegurotech.com.br/enroll/create?plan=93"
      />
    </GalleryContent>
  );
};

export default Gallery;
