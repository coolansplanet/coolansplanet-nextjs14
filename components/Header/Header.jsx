import React from "react";
//import ErrorBoundary from "../ErrorBoundary";
import SocialNetworkLinks from "./SocialNetworkLinks";
import NavigationLinks from "./NavigationLinks";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { navigationConfig } from "@/config";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    // <ErrorBoundary>
    <header className={styles.header}>
      <Link href="/">
        <img src={logo.src} alt="" className={styles.logo} />
      </Link>
      <NavigationLinks links={navigationConfig} />
      <SocialNetworkLinks burgerAdditionalLinks={navigationConfig} />
    </header>
    // </ErrorBoundary>
  );
};

export default Header;
