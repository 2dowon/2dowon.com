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
    textColor: "#126DDD",
    bgColor: "#E9F1FC",
  },
  tip: {
    icon: <Flame className="w-[1.2rem]" />,
    textColor: "#2DBFBC",
    bgColor: "#E9F9F8",
  },
  quote: {
    icon: <Lightbulb className="w-[1.2rem]" />,
    textColor: "#7852EE",
    bgColor: "#F2EFFE",
  },
  danger: {
    icon: <TriangleAlert className="w-[1.2rem]" />,
    textColor: "#E4374B",
    bgColor: "#FCEDEE",
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

      <div className="text-slate-900">{children}</div>
    </div>
  );
};

export default Callout;
