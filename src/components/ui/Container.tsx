import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="container mx-auto  space-y-10 px-3 xl:px-0">{children}</div>
  );
};

export default Container;
