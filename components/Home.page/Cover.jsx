"use client";
import { useState } from "react";
import { urlFiles } from "@/config";
import styles from "./Cover.module.scss";

const Cover = ({ imageUrl }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div className={styles.cover}>
      <img
        className={
          styles.coverImage + " " + (imageIsLoaded && styles.coverImageLoaded)
        }
        onLoad={() => setImageIsLoaded(true)}
        src={urlFiles + imageUrl}
        alt=""
      />
    </div>
  );
};

export default Cover;
