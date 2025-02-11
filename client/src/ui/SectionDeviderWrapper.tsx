import { PropsWithChildren } from "react";

const SectionDeviderWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className=" sm:flex items-center justify-center h-auto w-full border-b border-black ">
      {children}
    </div>
  );
};

export default SectionDeviderWrapper;
