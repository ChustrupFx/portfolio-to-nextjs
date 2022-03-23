import { Container as C } from "./style";

const Container: React.FC = ({ children }) => {
  return (
    <>
      <C>{children}</C>
    </>
  );
};

export default Container;
