import { $ } from "app/_utils/style.utils";

export default function SubTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h2
      {...props}
      className={$(
        "text-2xl mb-[0.5rem] lg:mb-[1rem] font-bold tracking-tight md:text-4xl",
        className
      )}
    />
  );
}
