"use client";
import React, { useState, useEffect, useRef } from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import Link from "next/link";
import { pageUrl } from "@/config";
import _ from "lodash";
import styles from "./Item.module.scss";

const Item = ({ id, imageUrl, title, setItemHeight, itemHeight }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const mainDivRef = useRef(null);

  const calculateHeight = (width) => {
    const itemFullHeight = (width * 1730) / 1159;
    const itemReducedHeight = itemFullHeight - (69 * itemFullHeight) / 1730;
    return _.floor(itemReducedHeight);
  };

  useEffect(() => {
    if (!!setItemHeight) {
      window.onresize = () => {
        if (mainDivRef.current) {
          setItemHeight(calculateHeight(mainDivRef.current.clientWidth));
        }
      };
    }

    return () => {
      if (!!setItemHeight) {
        window.onresize = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!!setItemHeight && mainDivRef.current) {
      setItemHeight(calculateHeight(mainDivRef.current.clientWidth));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainDivRef.current, imageIsLoaded]);

  return (
    //<ErrorBoundary>
    <Link
      href={pageUrl.publications.replace("[id]", id)}
      className={styles.item}
      ref={mainDivRef}
      style={{ height: itemHeight }}
    >
      <img
        loading={"lazy"}
        src={imageUrl}
        alt={title}
        className={
          styles.image + " " + (imageIsLoaded ? styles["image-loaded"] : "")
        }
        onLoad={() => setImageIsLoaded(true)}
      />
    </Link>
    //</ErrorBoundary>
  );
};

export default Item;
