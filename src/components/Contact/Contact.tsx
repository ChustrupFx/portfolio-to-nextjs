import { ContactContainer, ContactItem, ContactText } from "./style";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact: React.FC = () => {
  return (
    <>
      <ContactContainer>
        <ContactItem data-aos="fade-left" data-aos-duration="500">
          <FaWhatsapp color="#00E676" size={60} />
          <ContactText href="tel:+5561994311593">(61) 9 9431-1593</ContactText>
        </ContactItem>
        <ContactItem data-aos="fade-right" data-aos-duration="800">
          <AiOutlineMail color="#DA495A" size={60} />
          <ContactText href="mailto:victorinaciof@gmail.com">
            victorinaciof@gmail.com
          </ContactText>
        </ContactItem>
      </ContactContainer>
    </>
  );
};

export default Contact;
