import { siteConfig } from "@/app/config";
import { profileImageLink } from "@/utils/const/url.const";
import Image from "../common/Image";
import ContactsIcon, { TContactsIconTypes } from "./ContactsIcon";
import LinkExternal from "./LinkExternal";

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
                  className="h-[0.7rem] w-[0.7rem] rounded-full"
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
          {Object.keys(siteConfig.author.contacts).map((sns) => {
            const contact =
              siteConfig.author.contacts[sns as TContactsIconTypes];
            const isNotManaged = sns === "legacyBlog" || sns === "tistory";

            return !contact ? null : (
              <LinkExternal key={sns} href={contact} className="relative">
                <ContactsIcon
                  contact={sns as TContactsIconTypes}
                  className="h-[1.3rem] w-[1.3rem]"
                />
                <div
                  className={`absolute bottom-[-0.2rem] right-[-0.3rem] h-[0.6rem] w-[0.6rem] rounded-full ${isNotManaged ? "bg-[#a1a0a5]" : "bg-primary-blue"}`}
                />
              </LinkExternal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
