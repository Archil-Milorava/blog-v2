import { PropsWithChildren } from "react";

const SectionDeviderWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className=" border-t border-b border-black w-full py-2 flex items-center justify-center">
      {children}
    </div>
  );
};

export default SectionDeviderWrapper;
