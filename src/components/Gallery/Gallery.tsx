import GalleryItem from "../GalleryItem/GalleryItem";

import { GalleryContent } from "./style";

const Gallery: React.FC = () => {
  return (
    <GalleryContent>
      <GalleryItem
        coverImage="/images/franquiamaisagil.jpg"
        alt="Franquia Mais Agil"
        description="Website Franquia Mais Ágil"
        visitLink="https://franquiamaisagil.com"
      />
      <GalleryItem
        coverImage="/images/seg-pet.png"
        alt="Seg Pet"
        description="Website Seg Pet"
        visitLink="https://seg.pet"
      />
      <GalleryItem
        coverImage="/images/espiritismoeluz.png"
        alt="Espiritismo e Luz"
        description="Website Espiritismo é Luz"
        visitLink="https://espiritismoeluz.com.br/"
      />
      <GalleryItem
        coverImage="/images/dominandooexcel.png"
        alt="Dominando o Excel"
        description="Website Dominando Excel"
        visitLink="https://dominandoexcel.com.br/"
      />
      <GalleryItem
        coverImage="/images/interpretacao-de-texto-landing-page.png"
        alt="Landing Page Interpretacao de Texto"
        description="Landing Page Curso de Interpretação de Texto"
      />
      <GalleryItem
        coverImage="/images/segpet-form.png"
        alt="Seg Pet Form"
        description="Formulário Seg Pet"
        visitLink="https://pet.esegurotech.com.br/enroll/create?plan=93"
      />
    </GalleryContent>
  );
};

export default Gallery;
