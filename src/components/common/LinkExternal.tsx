import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const LinkExternal = ({
  href,
  children,
  className,
}: Pick<React.ComponentProps<"a">, "href" | "children" | "className">) => {
  if (!href) {
    return <p>{children}</p>;
  }

  return (
    <Link
      href={href}
      className={cn("text-primary transition hover:text-secondary", className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

export default LinkExternal;
