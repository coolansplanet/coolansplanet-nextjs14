"use client";
import React, { useState, useEffect } from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { urlFiles } from "@/config";
import styles from "./Image.module.scss";

const Image = ({ url = "" }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [timeOutId, setTimeOutId] = useState("");

  useEffect(() => {
    clearTimeout(timeOutId);
    if (imageIsLoaded) {
      setImageIsLoaded(false);
      const timeOut = setTimeout(() => {
        setImageUrl(url);
      }, 300);
      setTimeOutId(timeOut);
    } else {
      setImageUrl(url);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    //<ErrorBoundary>
    <div className={styles.image}>
      <img
        className={
          styles["image-content"] +
          " " +
          (imageIsLoaded ? styles["image-content-loaded"] : "")
        }
        src={urlFiles + imageUrl}
        alt=""
        onLoad={() => setImageIsLoaded(true)}
      />
    </div>
    //</ErrorBoundary>
  );
};

export default Image;
