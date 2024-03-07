"use client";
import React, { useState } from "react";
import { urlFiles } from "@/config";
import styles from "./Image.module.scss";
//import ErrorBoundary from "components/ErrorBoundary";

const Image = ({ url }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <div className={styles.imageFrame}>
      <img
        src={urlFiles + url}
        onLoad={() => setImageIsLoaded(true)}
        className={
          styles.image + " " + (imageIsLoaded ? styles.imageLoaded : "")
        }
        alt=""
      />
    </div>
  );
};
export default Image;
