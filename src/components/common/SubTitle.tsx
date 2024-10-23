import { cn } from "@/utils/style.utils";

export default function SubTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h2
      {...props}
      className={cn(
        "mb-[0.5rem] text-xl font-bold tracking-tight md:mb-[1rem] md:text-3xl",
        className,
      )}
    />
  );
}
