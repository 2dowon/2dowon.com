"use client";

import { siteConfig } from "@/app/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubHeader = () => {
  const pathname = usePathname();

  return (
    <aside className="flex items-center justify-center pb-[2rem]">
      <nav
        className="relative flex flex-row items-start px-0 pb-0 fade scroll-pr-6 md:relative md:overflow-auto"
        id="nav"
      >
        <div className="flex items-center space-x-[1rem]">
          {siteConfig.menus.map(({ label, path }) => {
            const isSelected = path === pathname;

            return (
              <Link
                key={label}
                href={path}
                className={`rounded-[0.4rem] px-[0.5rem] py-[0.2rem] text-lg font-semibold tracking-tight transition-all hover:bg-gray-200 ${isSelected ? "text-black" : "text-black text-opacity-50"}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default SubHeader;
