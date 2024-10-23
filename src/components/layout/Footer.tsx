import { siteConfig } from "@/app/config";
import { useMemo } from "react";
import ContactsIcon, { TContactsIconTypes } from "../common/ContactsIcon";
import LinkExternal from "../common/LinkExternal";

const Footer = () => {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
    <footer className="pb-8 text-sm">
      <div className="flex flex-col items-end space-y-1">
        <div className="flex space-x-2">
          {Object.keys(siteConfig.author.contacts).map((sns) => {
            let contact = siteConfig.author.contacts[sns as TContactsIconTypes];

            return !contact ? null : (
              <LinkExternal key={sns} href={contact}>
                <ContactsIcon contact={sns as TContactsIconTypes} />
              </LinkExternal>
            );
          })}
        </div>
        <p>
          <span>© {since}, </span>
          <LinkExternal href="https://github.com/2dowon/2dowon.com">
            {siteConfig.title}
          </LinkExternal>
          <span> Powered by </span>
          <LinkExternal href="https://nextjs.org/">Next.js</LinkExternal>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
