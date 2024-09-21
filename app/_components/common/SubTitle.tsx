import { $ } from "app/_utils/style.utils";

export default function SubTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h2
      {...props}
      className={$(
        "text-xl mb-[0.5rem] md:mb-[1rem] font-bold tracking-tight md:text-3xl",
        className
      )}
    />
  );
}
