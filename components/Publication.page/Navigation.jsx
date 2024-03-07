import React from "react";
//import ErrorBoundary from "components/ErrorBoundary";
import { navigationItems } from "./config";
import { pageUrl } from "@/config";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import styles from "./Navigation.module.scss";

const Navigation = ({
  currentItemNumber = 0,
  publications = [],
  className = "",
}) => {
  const totalItemsNumber = publications.length;

  const navigationItemsPopulated = _.cloneDeep(navigationItems);

  const { first, previous, next, last, infoDisplay } = navigationItemsPopulated;

  const getId = (buttonName) => {
    let index = currentItemNumber;
    switch (buttonName) {
      case "first": {
        index = 0;
        break;
      }
      case "previous": {
        index--;
        break;
      }
      case "next": {
        index++;
        break;
      }
      case "last": {
        index = totalItemsNumber - 1;
        break;
      }
      default: {
        index = 0;
      }
    }
    return !!publications[index]
      ? publications[index].id
      : publications[currentItemNumber].id;
  };

  first.disabled = previous.disabled = currentItemNumber <= 0;
  last.disabled = next.disabled = currentItemNumber >= totalItemsNumber - 1;

  infoDisplay.text = `${currentItemNumber + 1} of ${totalItemsNumber}`;
  return (
    //<ErrorBoundary>
    <div className={styles.navigation + " " + className}>
      {Object.keys(navigationItemsPopulated).map((key) => {
        const { icon, text, disabled } = navigationItemsPopulated[key];
        if (key === "infoDisplay") {
          return (
            <span className={styles.text} key={key}>
              {text}
            </span>
          );
        }
        return (
          <Link
            href={pageUrl.publications.replace("[id]", getId(key))}
            key={key}
            shallow={true}
            className={styles.button}
            disabled={disabled}
          >
            <FontAwesomeIcon icon={icon} />
          </Link>
        );
      })}
    </div>
    //</ErrorBoundary>
  );
};

export default Navigation;
