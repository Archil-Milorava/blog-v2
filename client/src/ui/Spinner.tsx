const spinnerSize = {
  small: "loading-xs",
  medium: "loading-md",
  large: "loading-lg",
} as const;

interface SpinnerProps {
  size: keyof typeof spinnerSize;
}

const Spinner = ({ size }: SpinnerProps) => {
  const sizeClass = spinnerSize[size] || "";

  return (
    <div className=" w-full h-auto flex items-center justify-center">
      <span className={`loading loading-bars ${sizeClass} `}></span>
    </div>
  );
};

export default Spinner;
