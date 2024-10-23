import { siteConfig } from "@/app/config";
import GithubIcon from "../icons/GithubIcon";
import LegacyBlogIcon from "../icons/LegacyBlogIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TistoryIcon from "../icons/TistoryIcon";

export type TContactsIconTypes = keyof typeof siteConfig.author.contacts;

const icons: { [key in TContactsIconTypes]: any } = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  // email: EmailIcon,
  legacyBlog: LegacyBlogIcon,
  tistory: TistoryIcon,
};

export default function ContactsIcon({
  contact,
  ...props
}: React.ComponentProps<"svg"> & { contact: TContactsIconTypes }) {
  const Component = icons[contact];

  return <Component {...props} />;
}
