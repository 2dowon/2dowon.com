import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profileImageLink } from "@/utils/const/url.const";
import Link from "next/link";
import Image from "../common/Image";
import ContactIcon from "./ContactIcon";

export type TContactsType =
  | "github"
  | "linkedin"
  | "email"
  | "legacyBlog"
  | "tistory";

interface IContact {
  key: TContactsType;
  link: string;
  tooltipText: string;
  iconClassName: string;
  isManaged: boolean;
}

const contactsMap: IContact[] = [
  {
    key: "github",
    link: "https://github.com/2dowon",
    tooltipText: "Github",
    iconClassName: "h-[1.3rem] w-[1.3rem]",
    isManaged: true,
  },
  {
    key: "linkedin",
    link: "https://www.linkedin.com/in/2dowon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    tooltipText: "LinkedIn",
    iconClassName: "h-[1.3rem] w-[1.3rem]",
    isManaged: true,
  },
  {
    key: "email",
    link: "mailto:dwon424@gmail.com",
    tooltipText: "dwon424@gmail.com",
    iconClassName: "h-[1.5rem] w-[1.5rem]",
    isManaged: true,
  },
  {
    key: "legacyBlog",
    link: "https://2dowon-log.netlify.app/",
    tooltipText: "https://2dowon-log.netlify.app/",
    iconClassName: "h-[1.4rem] w-[1.4rem]",
    isManaged: false,
  },
  {
    key: "tistory",
    link: "https://dwon-lee.tistory.com/",
    tooltipText: "Tistory",
    iconClassName: "h-[1.3rem] w-[1.3rem]",
    isManaged: false,
  },
];

const Profile = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-y-[1rem] ${className}`}>
      <Image
        src={profileImageLink}
        alt="profile"
        width={700}
        height={700}
        className="h-[7rem] w-[7rem] rounded-full object-contain"
      />

      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold text-black">이도원</p>

        <div className="mt-[0.5rem]">
          {[
            { text: "Currently managed", color: "#3B82F6" },
            { text: "Currently not managed", color: "#a1a0a5" },
          ].map(({ text, color }) => {
            return (
              <div key={text} className="flex items-center gap-x-[0.5rem]">
                <div
                  className="h-[0.5rem] w-[0.5rem] rounded-full"
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs" style={{ color }}>
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-[1rem] flex space-x-[1rem]">
          {contactsMap.map(
            ({ key, link, tooltipText, iconClassName, isManaged }) => {
              return (
                <TooltipProvider key={key}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ContactIcon
                          iconType={key}
                          isManaged={isManaged}
                          iconClassName={iconClassName}
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
