import { siteConfig } from "@/app/config";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export type TContactsIconTypes = keyof typeof siteConfig.author.contacts;

const icons: { [key in TContactsIconTypes]: any } = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function ContactsIcon({
  contact,
  ...props
}: React.ComponentProps<"svg"> & { contact: TContactsIconTypes }) {
  const Component = icons[contact];

  return <Component {...props} />;
}
