import { highlight } from "sugar-high";

const CustomCode = ({ children, ...props }: any) => {
  const codeHTML = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

export default CustomCode;
