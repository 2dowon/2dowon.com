import { Flame, Lightbulb, StickyNote, TriangleAlert } from "lucide-react";
import { PropsWithChildren } from "react";

type TCalloutIcon = "note" | "tip" | "quote" | "danger";

const CALLOUT_TYPE_META_MAP: {
  [type in TCalloutIcon]: {
    icon: React.ReactNode;
    textColor: string;
    bgColor: string;
  };
} = {
  note: {
    icon: <StickyNote className="w-[1.2rem]" />,
    textColor: "#0178FC",
    bgColor: "#1D2B3E",
  },
  tip: {
    icon: <Flame className="w-[1.2rem]" />,
    textColor: "#53DFDD",
    bgColor: "#213539",
  },
  quote: {
    icon: <Lightbulb className="w-[1.2rem]" />,
    textColor: "#A882FF",
    bgColor: "#2A2C3E",
  },
  danger: {
    icon: <TriangleAlert className="w-[1.2rem]" />,
    textColor: "#FA474C",
    bgColor: "#32262B",
  },
};

const Callout = ({
  type,
  title,
  children,
}: PropsWithChildren<{ type: TCalloutIcon; title?: string }>) => {
  const { icon, textColor, bgColor } = CALLOUT_TYPE_META_MAP[type];

  return (
    <div
      className={`my-[1rem] rounded-[0.4rem] px-[1rem] pb-[0.5rem] ${
        title ? "pt-[1.3rem]" : "flex items-center gap-x-[0.7rem] pt-[0.5rem]"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex items-center gap-x-[0.5rem] font-bold"
        style={{ color: textColor }}
      >
        {icon}
        {title && <span className="!my-0 pt-[0.1rem]">{title}</span>}
      </div>

      <div className="text-zinc-200">{children}</div>
    </div>
  );
};

export default Callout;
