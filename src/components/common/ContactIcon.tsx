import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import NetlifyIcon from "../icons/NetlifyIcon";
import TistoryIcon from "../icons/TistoryIcon";
import { TContactsType } from "./Profile";

const icons: { [key in TContactsType]: any } = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
  legacyBlog: NetlifyIcon,
  tistory: TistoryIcon,
};

const ContactIcon = ({
  iconType,
  isManaged,
  iconClassName,
}: {
  iconType: TContactsType;
  isManaged: boolean;
  iconClassName: string;
}) => {
  const IconComponent = icons[iconType];

  return (
    <div className={`relative h-[1.3rem] w-[1.3rem]`}>
      <IconComponent className={iconClassName} />
      <div
        className={`absolute bottom-[-0.2rem] right-[-0.25rem] h-[0.6rem] w-[0.6rem] rounded-full ${isManaged ? "bg-primary-blue" : "bg-[#a1a0a5]"}`}
      />
    </div>
  );
};

export default ContactIcon;
