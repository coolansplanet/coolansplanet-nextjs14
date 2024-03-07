"use client";
import React, { useState } from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({
  navigationLinks = [],
  socialNetworkLinks = [],
  className = "",
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    //<ErrorBoundary>
    <div className={styles["burger-menu"] + " " + className}>
      <button className={styles["burger-button"]} onClick={() => toggleMenu()}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {menuIsOpen && (
        <div
          className={styles["menu-items"]}
          onClick={() => setMenuIsOpen(false)}
        >
          {navigationLinks.map(({ name, path, label, isExact }) => {
            const props = {
              href: path,
              className:
                styles["link"] +
                " " +
                styles["link-navigation"] +
                " " +
                (path === pathname ? styles.active : ""),
            };
            /*exact: isExact*/

            return (
              <Link {...props} key={name}>
                {label}
              </Link>
            );
          })}
          <div className={styles["social-network-links"]}>
            {Object.entries(socialNetworkLinks).map(
              ([key, { icon, link, title, type }]) => {
                const linkProps = {
                  href: link,
                  title,
                  type,
                  target: "_blank",
                  rel: "noopener noreferrer",
                };

                !linkProps.type && delete linkProps.type;

                return (
                  <a
                    {...linkProps}
                    key={key}
                    className={styles.link + " " + styles["social-network"]}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
    //</ErrorBoundary>
  );
};

export default BurgerMenu;
