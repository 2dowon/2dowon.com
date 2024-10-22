import { cn } from "app/_utils/style.utils";
import React from "react";

const Title = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      {...props}
      className={cn(
        "mb-[1rem] text-3xl font-extrabold tracking-tight sm:text-5xl md:mb-[2rem]",
        className,
      )}
    />
  );
};

export default Title;
