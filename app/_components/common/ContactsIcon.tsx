import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function ContactsIcon({
  contact,
  ...props
}: React.ComponentProps<"svg"> & { contact: string }) {
  const Component = icons[contact];

  return <Component {...props} />;
}
