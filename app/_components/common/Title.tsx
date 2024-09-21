import { $ } from "app/_utils/style.utils";
import React from "react";

const Title = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      {...props}
      className={$(
        "mb-[1rem] md:mb-[2rem] text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-zinc-100",
        className
      )}
    />
  );
};

export default Title;
