import { $ } from "app/_utils/style.utils";
import React from "react";

const Title = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      {...props}
      className={$(
        "mb-[1rem] text-3xl font-extrabold tracking-tight text-black dark:text-zinc-100 sm:text-5xl md:mb-[2rem]",
        className,
      )}
    />
  );
};

export default Title;
