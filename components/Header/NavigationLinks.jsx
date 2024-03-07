"use client";
import React, { useState, useEffect, useRef } from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import styles from "./NavigationLinks.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as googleAnalyticsTag from "@/helpers/googleAnalyticsTag";

const NavigationLinks = ({ links = [] }) => {
  const pathname = usePathname();
  const [loadingLink, setLoadingLink] = useState("");
  const clientPageRef = useRef("");

  useEffect(() => {
    if (clientPageRef.current != pathname) {
      googleAnalyticsTag.pageview(pathname);
      clientPageRef.current = pathname;
    }
    return () => {
      setLoadingLink("");
    };
  }, [pathname]);

  return (
    // <ErrorBoundary>
    <nav className={styles["navigation-links"]}>
      {links.map(({ name, path, label }) => {
        const classNameArray = [styles["link"]];
        loadingLink === path && classNameArray.push(styles.loading);
        path === pathname && classNameArray.push(styles.active);
        const props = {
          href: path,
          className: classNameArray.join(" "),
        };
        return (
          <Link
            {...props}
            key={name}
            onClick={() => {
              setLoadingLink(path);
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
    //</ErrorBoundary>
  );
};

export default NavigationLinks;
