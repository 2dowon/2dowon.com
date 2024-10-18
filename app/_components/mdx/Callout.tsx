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
      className={`rounded-[0.4rem] px-[1rem] py-[0.5rem] my-[1rem] ${
        title ? "" : "flex items-center gap-x-[0.7rem]"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex items-center gap-x-[0.5rem] font-bold"
        style={{ color: textColor }}
      >
        {icon}
        {title && <span className="!my-0">{title}</span>}
      </div>
      {children}
    </div>
  );
};

export default Callout;
