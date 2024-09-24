import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode; // Define the type for children
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-[340px] mx-auto">{children}</div>;
};

export default Container;
