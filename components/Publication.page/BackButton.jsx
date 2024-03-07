import React from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { backButton } from "./config";
import { pageUrl } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./BackButton.module.scss";

const BackButton = ({ className = "" }) => {
  const { title, icon } = backButton;
  return (
    //<ErrorBoundary>
    <Link
      href={pageUrl.home}
      className={styles["back-button"] + " " + className}
    >
      <span className={styles.text}>{title + " "}</span>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </Link>
    //</ErrorBoundary>
  );
};

export default BackButton;
