import React from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { socialNetworkLinks } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "./BurgerMenu";
import styles from "./SocialNetworkLinks.module.scss";

const SocialNetworkLinks = ({ burgerAdditionalLinks = [] }) => {
  return (
    //<ErrorBoundary>
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
            <a {...linkProps} className={styles.link} key={key}>
              <FontAwesomeIcon icon={icon} />
            </a>
          );
        }
      )}
      <BurgerMenu
        navigationLinks={burgerAdditionalLinks}
        socialNetworkLinks={socialNetworkLinks}
        className={styles["burger-menu"]}
      />
    </div>
    //</ErrorBoundary>
  );
};

export default SocialNetworkLinks;
