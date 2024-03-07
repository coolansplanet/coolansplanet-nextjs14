import React from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { socialNetworkLinks as socialNetworkLinksConfig } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import styles from "./SocialNetworks.module.scss";

const SocialNetworks = ({ data = {}, className = "" }) => {
  const items = [];

  Object.keys(socialNetworkLinksConfig).forEach((key) => {
    const socialNetworkUrl = data[key + "Url"];
    !!socialNetworkUrl &&
      items.push({
        href: socialNetworkUrl,
        key,
        icon: socialNetworkLinksConfig[key].icon,
        title: "Share on " + _.capitalize(key),
        target: "_blank",
        rel: "noopener noreferrer",
      });
  });

  return (
    //<ErrorBoundary>
    <div className={styles["social-networks"] + " " + className}>
      {items.map((props) => {
        const { icon, key, ...linkProps } = props;

        return (
          <a {...linkProps} key={key} className={styles.link}>
            <FontAwesomeIcon icon={icon} />
          </a>
        );
      })}
    </div>
    //</ErrorBoundary>
  );
};

export default SocialNetworks;
