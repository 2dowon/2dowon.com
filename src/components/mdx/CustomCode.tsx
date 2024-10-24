import { DetailedHTMLProps, HTMLAttributes } from "react";

const CustomCode = ({
  className = "",
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  return (
    <pre {...props} className={className}>
      {children}
    </pre>
  );
};

export default CustomCode;
