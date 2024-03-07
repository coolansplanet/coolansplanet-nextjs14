"use client";
import React, { useState, useEffect } from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { useRouter } from "next/navigation";
import { urlBase, pageUrl } from "@/config";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";
import BackButton from "./BackButton";
import { formatDistance, differenceInDays } from "date-fns";
import styles from "./Info.module.scss";

const Info = ({ publications = [], id }) => {
  const { push } = useRouter();
  const [currentItemNumber, setCurrentItemNumber] = useState(0);

  useEffect(() => {
    let index = 0;
    const lastIndex = publications.length - 1;

    if (publications.length > 0) {
      index = publications.findIndex(({ id: oneId }) => oneId == id);
      index != currentItemNumber && setCurrentItemNumber(index);
    }

    const onKeyPressListener = ({ keyCode }) => {
      const pushToPublication = ({ id }) =>
        push((urlBase + pageUrl.publications).replace("[id]", id), "", {
          shallow: true,
        });
      if ((keyCode === 37 || keyCode === 33) && index > 0) {
        pushToPublication(publications[index - 1]);
      } else if (
        (keyCode === 32 || keyCode === 34 || keyCode === 39) &&
        index < lastIndex
      ) {
        pushToPublication(publications[index + 1]);
      } else if (keyCode === 36) {
        pushToPublication(publications[0]);
      } else if (keyCode === 35) {
        pushToPublication(publications[lastIndex]);
      }
    };
    document.addEventListener("keydown", onKeyPressListener);
    return () => {
      document.removeEventListener("keydown", onKeyPressListener);
    };
  }, [id]);

  const {
    publicationDate: publicationDateRaw,
    title,
    ...restOfData
  } = publications[currentItemNumber];

  const publicationDate = new Date(publicationDateRaw);

  let publicationDatePreviousText = "Published ";
  let publicationDateFormatted;

  if (differenceInDays(new Date(), publicationDate) < 2) {
    publicationDateFormatted = formatDistance(publicationDate, new Date(), {
      addSuffix: true,
    });
  } else {
    publicationDatePreviousText += "on ";
    publicationDateFormatted = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
    }).format(publicationDate);
  }

  return (
    //<ErrorBoundary>
    <div className={styles.info}>
      <h1 className={styles.title}>{title}</h1>
      <br />
      <p className={styles["publication-date"]}>
        <span className={styles["publication-date-previous-text"]}>
          {publicationDatePreviousText}
        </span>
        {publicationDateFormatted}
      </p>
      <SocialNetworks data={restOfData} className={styles["social-networks"]} />
      <Navigation
        currentItemNumber={currentItemNumber}
        publications={publications}
        className={styles.navigation}
      />
      <BackButton className={styles["back-button"]} />
    </div>
    //</ErrorBoundary>
  );
};

export default Info;
