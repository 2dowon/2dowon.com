"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) {
      return;
    }

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "2dowon/2dowon.com");
    scriptElem.setAttribute("data-repo-id", "R_kgDOMzgYIw");
    scriptElem.setAttribute("data-category", "General");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOMzgYI84Cjhvu");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", "dark");
    scriptElem.setAttribute("data-lang", "en");

    ref.current.appendChild(scriptElem);
  }, []);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame",
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app",
    );
  }, [theme]);

  return <section ref={ref} className="mt-[10rem]" />;
};

export default Giscus;
