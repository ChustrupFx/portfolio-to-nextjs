import { useEffect } from "react";

type AOSProps = {
  animationName: string;
  animationDelay?: string | number;
  animationOffset?: number;
  animationDuration?: number;
  animationAnchor?: string;
};

const AOSAnimated: React.FC<AOSProps> = ({
  children,
  animationName,
  animationDelay,
  animationOffset,
  animationDuration,
  animationAnchor,
}) => {
  console.log(children);

  return (
    <>
      <div
        data-aos={animationName}
        data-aos-delay={animationDelay || 0}
        data-aos-offset={animationOffset || 0}
        data-aos-duration={animationDuration || 500}
        data-aos-anchor={animationAnchor || null}
      >
        {children}
      </div>
    </>
  );
};

export default AOSAnimated;
