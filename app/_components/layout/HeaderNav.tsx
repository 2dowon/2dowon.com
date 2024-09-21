import { siteConfig } from "app/config";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "public/static/images/dw_logo.png";
import { ThemeSwitcher } from "../ThemeSwitcher";

const HeaderNav = () => {
  return (
    <aside className="-ml-[8px] mb-[2rem] md:mb-[3rem] tracking-tight">
      <div className="flex justify-between md:sticky md:top-20">
        <nav
          className="relative flex flex-row items-start px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex space-x-[0.5rem] items-center">
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
                  className="relative flex px-2 py-1 m-1 align-middle transition-all hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default HeaderNav;
