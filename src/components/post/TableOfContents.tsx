"use client";

import { ITocItem } from "@/utils/interfaces/mdx.interface";
import { useEffect, useState } from "react";

const TableOfContentsItem = ({
  item,
  activeId,
  depth = 0,
}: {
  item: ITocItem;
  activeId: string;
  depth?: number;
}) => {
  const { url, title, items } = item;
  const isActive = url === activeId;

  return (
    <>
      <li className="py-[0.25rem] leading-tight">
        <a href={url} className="no-underline">
          <span
            className={`transition-colors ${depth === 0 ? "text-xs" : "text-[0.6875rem]"} ${
              isActive
                ? "font-medium text-tx"
                : "text-gray-4 hover:text-tx dark:text-black-8"
            }`}
          >
            {title}
          </span>
        </a>
      </li>

      {items && (
        <ul className="list-none pl-[0.75rem]">
          {items.map((subItem) => (
            <TableOfContentsItem
              key={subItem.url}
              item={subItem}
              activeId={activeId}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const TableOfContents = ({ items }: { items: ITocItem[] }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "0px 0px -90% 0px", threshold: 0.1 },
    );

    const observe = (item: ITocItem) => {
      const element = document.getElementById(item.url.slice(1));
      if (element) {
        observer.observe(element);
      }
      item.items?.forEach(observe);
    };

    items.forEach(observe);

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) {
    return null;
  }

  return (
    <nav className="absolute left-full top-0 hidden h-full xl:block">
      <div className="animate-in fade-in slide-in-from-left-2 sticky top-[calc(var(--header-height)+2rem)] w-[14rem] pl-[3rem] duration-500">
        <h2 className="text-[0.625rem] font-medium tracking-widest text-gray-4 dark:text-black-8">
          ON THIS PAGE
        </h2>

        <ul className="mt-[0.5rem] list-none">
          {items.map((item) => (
            <TableOfContentsItem
              key={item.url}
              item={item}
              activeId={activeId}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
