export default function TistoryIcon({
  className,
  width = 16,
  height = 16,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M7.54016 1.98V15H5.40016C5.09349 15 4.85349 14.92 4.68016 14.76C4.52016 14.5867 4.44016 14.36 4.44016 14.08V1.98H3.36016C2.61349 1.98 2.03349 2.10667 1.62016 2.36C1.22016 2.61333 0.99349 3.09333 0.940156 3.8H0.560156V0.96H11.4202V3.8H11.0602C10.9935 3.09333 10.7535 2.61333 10.3402 2.36C9.94016 2.10667 9.36682 1.98 8.62016 1.98H7.54016Z"
        fill="currentColor"
      />
    </svg>
  );
}
