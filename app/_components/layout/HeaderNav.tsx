import { siteConfig } from "app/config";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "public/static/images/dw_logo.png";
import { ThemeSwitch } from "../ThemeSwitch.client";

const HeaderNav = () => {
  return (
    <aside className="-ml-[8px] mb-[2rem] tracking-tight md:mb-[3rem]">
      <div className="flex justify-between md:sticky md:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex items-center space-x-[0.5rem]">
            <Link href="/">
              <Image
                src={LogoImage}
                alt="2dowon blog logo image"
                width={300}
                height={300}
                className="h-[3rem] w-[3rem] object-contain"
              />
            </Link>

            {siteConfig.menus.map(({ label, path }) => {
              return (
                <Link
                  key={label}
                  href={path}
                  className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
        <ThemeSwitch />
      </div>
    </aside>
  );
};

export default HeaderNav;
